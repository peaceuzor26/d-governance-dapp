import { Vote } from '../model/vote';
import { RollupStateHandler } from '../shared/rollup-state-handler';
import { proposalStorage } from '../storage/proposal';
import { voteStorage } from '../storage/vote';

export class VoteController {
    /**
     * ### VoteController voteOnProposal
     * @description vote on a given proposal.
     * @param {*} data {proposalId: UUID, voter: address, choice: string}
     */
    async voteOnProposal(data) {
        if (!data.proposalId || !data.voter || !data.choice) {
            return await RollupStateHandler.handleReport({
                error: 'Proposal ID, voter address, and choice must be provided.',
            });
        }

        const proposal = proposalStorage.getOneById(data.proposalId);

        if (!proposal.id) {
            return await RollupStateHandler.handleReport({
                error: `Proposal not found for id '${data.proposalId}'`,
            });
        }

        return await RollupStateHandler.advanceWrapper(() => {
            const newVote = new Vote(data);
            proposal.addVote(newVote);
            proposalStorage.updateOne(proposal);
            voteStorage.addOne(newVote);

            return {
                ok: true,
                message: `Vote added successfully to proposal '${proposal.id}'!`,
                data: newVote.getData(),
            };
        });
    }

    /**
     * ### VoteController getVoteById
     * @description get a vote by a given vote id.
     * @param {*} data vote id (UUID)
     */
    async getVoteById(data) {
        const voteId = data[0];
        const storageRequest = voteStorage.getOneById(voteId);

        if (!storageRequest?.id)
            return await RollupStateHandler.handleReport({
                error: `Vote not found for id '${voteId}'.`,
            });

        return await RollupStateHandler.inspectWrapper(() => ({
            data: storageRequest.getData(),
        }));
    }
}
