class ProposalStorage {
    proposals;

    constructor() {
        this.proposals = new Map();
    }

    /**
     * ### ProposalStorage getAll
     * @description get all stored proposals.
     * @returns {*} list ProposalModel[]
     */
    getAll() {
        return Array.from(this.proposals.values());
    }

    /**
     * ### ProposalStorage addOne
     * @description store a single proposal.
     * @param {*} proposal ProposalModel
     */
    addOne(proposal) {
        this.proposals.set(proposal.id, proposal);
    }

    /**
     * ### ProposalStorage getOneById
     * @description get a single proposal given an id.
     * @param {*} id UUID
     * @returns ProposalModel | undefined (not found)
     */
    getOneById(id) {
        return this.proposals.get(id);
    }

    /**
     * ### ProposalStorage updateOne
     * @description update a single proposal.
     * @param {*} proposal ProposalModel
     */
    updateOne(proposal) {
        this.proposals.set(proposal.id, proposal);
    }
}

export const proposalStorage = new ProposalStorage();
