import { ProposalController } from './proposal';
import { VoteController } from './vote';

const proposalController = new ProposalController();
const voteController = new VoteController();

export const controller = {
    createProposal: proposalController.createProposal,
    getAllProposals: proposalController.getAllProposals,
    getProposalById: proposalController.getProposalById,
    voteOnProposal: voteController.voteOnProposal,
    getVoteById: voteController.getVoteById,
};
