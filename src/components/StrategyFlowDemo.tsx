"use client";

import { useState } from "react";
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Node,
  Edge,
  NodeTypes,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
} from "@xyflow/react";
import { cn } from "@/lib/utils";
import "@xyflow/react/dist/style.css";
import { ZoomSlider } from "./zoom-slider";

interface CustomNodeData extends Record<string, unknown> {
  label: string;
  description: string;
  tooltip?: string;
  type?: "start" | "protocol" | "conditional" | "end";
}

type CustomNode = Node<CustomNodeData>;

function CustomNode({ data }: { data: CustomNodeData }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const getBgColor = () => {
    switch (data.type) {
      case "start":
        return "bg-gradient-to-br from-mirrorfi-blue/20 to-mirrorfi-blue/5";
      case "protocol":
        return "bg-gradient-to-br from-mirrorfi-cyan/20 to-mirrorfi-cyan/5";
      case "conditional":
        return "bg-gradient-to-br from-purple-500/20 to-purple-500/5";
      case "end":
        return "bg-gradient-to-br from-mirrorfi-darkblue/20 to-mirrorfi-darkblue/5";
      default:
        return "bg-white/5";
    }
  };

  const getBorderColor = () => {
    switch (data.type) {
      case "start":
        return "border-mirrorfi-blue/30";
      case "protocol":
        return "border-mirrorfi-cyan/30";
      case "conditional":
        return "border-purple-500/30";
      case "end":
        return "border-mirrorfi-darkblue/30";
      default:
        return "border-white/30";
    }
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div
        className={cn(
          "p-4 border-2 rounded-xl w-[250px]",
          getBgColor(),
          getBorderColor(),
          "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
          "transition-all duration-200",
          "hover:scale-105"
        )}
      >
        <Handle
          type="target"
          position={Position.Left}
          className="!bg-white/30"
        />
        <div className="text-white font-satoshi font-medium mb-1 subpixel-antialiased">
          {data.label}
        </div>
        <div className="text-white/80 text-sm font-univa subpixel-antialiased">
          {data.description}
        </div>
        <Handle
          type="source"
          position={Position.Right}
          className="!bg-white/30"
        />
      </div>
      {data.tooltip && showTooltip && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white/90 px-4 py-2 rounded text-sm whitespace-nowrap z-50">
          {data.tooltip}
        </div>
      )}
    </div>
  );
}

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

const initialNodes: CustomNode[] = [
  {
    id: "deposit",
    position: { x: 100, y: 100 },
    data: {
      label: "Deposit SOL",
      description: "Initial SOL deposit",
      tooltip: "Start with depositing SOL to begin the strategy",
      type: "start",
    },
    type: "custom",
  },
  {
    id: "sanctum",
    position: { x: 400, y: 0 },
    data: {
      label: "Stake via Sanctum",
      description: "60% of funds",
      tooltip: "Stake 60% of deposited SOL through Sanctum for stable yields",
      type: "protocol",
    },
    type: "custom",
  },
  {
    id: "jupiter",
    position: { x: 400, y: 200 },
    data: {
      label: "Jupiter Swap",
      description: "40% of funds",
      tooltip: "Swap 40% of SOL to USDC for liquidity provision",
      type: "protocol",
    },
    type: "custom",
  },
  {
    id: "conditional",
    position: { x: 700, y: 100 },
    data: {
      label: "APR Check",
      description: "Evaluate yields",
      tooltip: "Auto-rebalance if APR difference > 5%",
      type: "conditional",
    },
    type: "custom",
  },
  {
    id: "yield",
    position: { x: 1000, y: 100 },
    data: {
      label: "Yield Distribution",
      description: "Receive in preferred token",
      tooltip: "Convert and receive yields in your chosen token",
      type: "end",
    },
    type: "custom",
  },
];

const initialEdges: Edge[] = [
  {
    id: "deposit-sanctum",
    source: "deposit",
    target: "sanctum",
    animated: true,
    style: { stroke: "#017AFD" },
  },
  {
    id: "deposit-jupiter",
    source: "deposit",
    target: "jupiter",
    animated: true,
    style: { stroke: "#017AFD" },
  },
  {
    id: "sanctum-conditional",
    source: "sanctum",
    target: "conditional",
    animated: true,
    style: { stroke: "#51D6FF" },
  },
  {
    id: "jupiter-conditional",
    source: "jupiter",
    target: "conditional",
    animated: true,
    style: { stroke: "#51D6FF" },
  },
  {
    id: "conditional-yield",
    source: "conditional",
    target: "yield",
    animated: true,
    style: { stroke: "#017AFD" },
  },
];

export default function StrategyFlowDemo() {
  const [nodes] = useNodesState<CustomNode>(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden bg-black/80">
      <div className="w-full h-[600px]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          panOnScroll={false}
          zoomOnScroll={false}
          preventScrolling={false}
        >
          <Background
            color="#017AFD"
            variant={BackgroundVariant.Cross}
            gap={24}
            size={1}
            className="opacity-40"
          />
          <ZoomSlider
            position="top-right"
            className="bg-blue-500/20 rounded-full text-blue-300"
          />
        </ReactFlow>
      </div>
    </div>
  );
}
