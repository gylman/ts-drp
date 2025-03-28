import { DRPNode } from "@ts-drp/node";
import { type IDRPObject } from "@ts-drp/types";

import { type Grid } from "./objects/grid";

interface GridState {
	node: DRPNode;
	drpObject: IDRPObject<Grid> | undefined;
	peers: string[];
	discoveryPeers: string[];
	objectPeers: string[];
}

export const gridState: GridState = {
	node: new DRPNode(),
	drpObject: undefined,
	peers: [],
	discoveryPeers: [],
	objectPeers: [],
};
