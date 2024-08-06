import crypto from 'node:crypto';

export class Proposal {
    id;
    title;
    description;
    createdAt;
    votes;

    /**
     * ### Proposal model required data
     * @param {*} title string
     * @param {*} description string
     */
    constructor({ title, description }) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.createdAt = Date.now();
        this.votes = new Map();
    }

    /**
     * ### Proposal getData
     * @description returns proposal basic data.
     * @returns proposal { id: UUID, title: string, description: string, createdAt: number }
     */
    getData() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            createdAt: this.createdAt,
        };
    }

    /**
     * ### Proposal addVote
     * @description add a vote to the proposal.
     * @param {*} vote VoteModel
     */
    addVote(vote) {
        this.votes.set(vote.id, vote);
    }

    /**
     * ### Proposal getVotes
     * @description return all votes on the proposal.
     * @returns VoteModel[]
     */
    getVotes() {
        return Array.from(this.votes.values());
    }
}
