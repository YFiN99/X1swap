# X1Swap – The Greenest DEX on X1 EcoChain

X1Swap is a lightweight Uniswap V2 fork built exclusively for X1 EcoChain, the world's first household-powered Layer-1 blockchain. With ultra-low fees (0.05% per swap) and 50% fee burn for deflationary mechanics, X1Swap drives real on-chain volume while leveraging X1Nodes (only ~3 Wh consumption) for sustainable DeFi.

## Why X1 EcoChain?
- **Energy Efficiency**: Every swap powered by home X1Nodes in 65+ countries – 1000x greener than Ethereum.
- **Speed & Cost**: 10K+ TPS via PoA, fees ~$0.002 (sub-cent micro-swaps).
- **EVM-Compatible**: Easy migration from Uniswap, full Solidity support.

## Features
- AMM swaps with concentrated liquidity (V2-style).
- Add/Remove liquidity with auto-burn rewards.
- Integrated with X1 wrapped token (WX1) for native pairs.
- Frontend: React + Wagmi for seamless wallet connect.

## Quick Demo
[Live Demo Link] (https://x1swap.vercel.app) – Swap GREEN/ECO pair in 8 seconds!
![Demo GIF](demo-swap.gif) ← Tambahin GIF screenshot swap kamu.

## Setup & Deploy
1. Clone: `git clone https://github.com/YFiN99/X1swap.git && cd X1swap`
2. Install: `npm install` (Hardhat, ethers.js, React deps).
3. Config X1 RPC in `hardhat.config.js`:
