<a id="readme-top"></a>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="docs/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Decentralized Governance dapp</h3>

  <p align="center">
    The

 Decentralized Governance dapp is a simple project to create and vote on proposals.
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

This decentralized governance dapp enables users to create proposals and vote on them. It is implemented using a similar structure to the Bshelf app, with controllers for proposals and votes, models for proposals and votes, and storage for both.

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js
- Docker

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/peaceuzor/dGovernance-dapp.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the development server
   ```sh
   npm start
   ```

### Usage

1. Create a proposal:
   ```javascript
   const proposalData = {
     title: 'New Proposal Title',
     description: 'Description of the proposal'
   };
   await controller.createProposal(proposalData);
   ```

2. Get all proposals:
   ```javascript
   await controller.getAllProposals();
   ```

3. Get a proposal by ID:
   ```javascript
   const proposalId = 'some-uuid';
   await controller.getProposalById(proposalId);
   ```

4. Vote on a proposal:
   ```javascript
   const voteData = {
     proposalId: 'some-uuid',
     voter: '0x12345',
     choice: 'yes'
   };
   await controller.voteOnProposal(voteData);
   ```

5. Get a vote by ID:
   ```javascript
   const voteId = 'some-uuid';
   await controller.getVoteById(voteId);
   ```

<!-- CONTACT -->
## Contact

Your Name - [@your_twitter](https://twitter.com/your_twitter) - email@example.com

Project Link: [https://github.com/your-username/decentralized-governance-dapp](https://github.com/your-username/decentralized-governance-dapp)

<p align="right">(<a href="#readme-top">back to top</a>)</p>