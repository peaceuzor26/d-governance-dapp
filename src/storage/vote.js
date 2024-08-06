class VoteStorage {
    votes;

    constructor() {
        this.votes = new Map();
    }

    /**
     * ### VoteStorage getAll
     * @description get all stored votes.
     * @returns {*} list VoteModel[]
     */
    getAll() {
        return Array.from(this.votes.values());
    }

    /**
     * ### VoteStorage addOne
     * @description store a single vote.
     * @param {*} vote VoteModel
     */
    addOne(vote) {
        this.votes.set(vote.id, vote);
    }

    /**
     * ### VoteStorage getOneById
     * @description get a single vote given an id.
     * @param {*} id UUID
     * @returns VoteModel | undefined (not found)
     */
    getOneById(id) {
        return this.votes.get(id);
    }
}

export const voteStorage = new VoteStorage();
