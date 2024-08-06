import { Proposal } from '../model/proposal';
import { RollupStateHandler } from '../shared/rollup-state-handler';
import { proposalStorage } from '../storage/proposal';

export class ProposalController {
    /**
     * ### ProposalController createProposal
     * @description create a new governance proposal.
     * @param {*} data {title: string, description: string}
     */
    async createProposal(data) {
        if (!data.title || !data.description) {
            return await RollupStateHandler.handleReport({
                error: 'Title and description must be provided.',
            });
        }

        return await RollupStateHandler.advanceWrapper(() => {
            const newProposal = new Proposal(data);
            proposalStorage.addOne(newProposal);

            return {
                ok: true,
                message: `Proposal created successfully!`,
                data: newProposal.getData(),
            };
        });
    }

    /**
     * ### ProposalController getAllProposals
     * @description get all proposals.
     */
    async getAllProposals() {
        return await RollupStateHandler.inspectWrapper(() =>
            proposalStorage.getAll()
        );
    }

    /**
     * ### ProposalController getProposalById
     * @description get a proposal by given id.
     * @param {*} data proposal id (UUID)
     */
    async getProposalById(data) {
        const proposalId = data[0];
        const storageRequest = proposalStorage.getOneById(proposalId);

        if (!storageRequest?.id)
            return await RollupStateHandler.handleReport({
                error: `Proposal not found for id '${proposalId}'.`,
            });

        return await RollupStateHandler.inspectWrapper(() => ({
            data: storageRequest.getData(),
        }));
    }
}
