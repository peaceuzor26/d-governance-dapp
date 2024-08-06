import crypto from 'node:crypto';

export class Vote {
    id;
    proposalId;
    voter;
    choice;
    votedAt;

    /**
     * ### Vote model required data
     * @param {*} proposalId UUID
     * @param {*} voter address (eg.: "0x...")
     * @param {*} choice string (eg.: "yes" or "no")
     */
    constructor({ proposalId, voter, choice }) {
        this.id = crypto.randomUUID();
        this.proposalId = proposalId;
        this.voter = voter;
        this.choice = choice;
        this.votedAt = Date.now();
    }

    /**
     * ### Vote getData
     * @description returns vote basic data.
     * @returns vote { id: UUID, proposalId: UUID, voter: address, choice: string, votedAt: number }
     */
    getData() {
        return {
            id: this.id,
            proposalId: this.proposalId,
            voter: this.voter,
            choice: this.choice,
            votedAt: this.votedAt,
        };
    }
}
