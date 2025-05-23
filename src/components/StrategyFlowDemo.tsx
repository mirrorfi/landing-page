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
import { BarChart } from "lucide-react";
import { TokenIcon } from "@web3icons/react";
import Image from "next/image";

interface CustomNodeData extends Record<string, unknown> {
  label: string;
  description?: string;
  tooltip?: string;
  type?: "token" | "protocol";
}

type CustomNode = Node<CustomNodeData>;

function CustomNode({ data }: { data: CustomNodeData }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const getNodeIcon = () => {
    switch (data.label) {
      case "SOL":
        return <TokenIcon symbol="sol" variant="branded" size={24} />;
      case "JITO SOL":
        return (
          <Image src={"/jitoSOL-logo.png"} alt="Jito" width={24} height={24} />
        );
      case "JUP SOL":
        return <TokenIcon symbol="jup" variant="branded" size={24} />;
      case "Kamino":
        return (
          <Image src={"/kamino-logo.png"} alt="Kamino" width={24} height={24} />
        );
      case "USDC":
        return <TokenIcon symbol="usdc" variant="branded" size={24} />;
      case "Drift Vault":
        return (
          <Image src={"/drift-logo.png"} alt="Drift" width={20} height={20} />
        );
      default:
        return <BarChart size={24} className="text-green-400" />;
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
          "p-4 border-2 rounded-xl w-[180px]",
          "bg-gradient-to-br from-mirrorfi-blue/20 to-mirrorfi-blue/5",
          "border-mirrorfi-blue/30",
          "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
          "transition-all duration-200",
          "hover:scale-105",
          "flex items-center"
        )}
      >
        <Handle
          type="target"
          position={Position.Left}
          className="!bg-white/30"
        />
        <div className="mr-3">{getNodeIcon()}</div>
        <div className="text-white font-satoshi font-medium subpixel-antialiased">
          {data.label}
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
    id: "sol",
    position: { x: 100, y: 150 },
    data: {
      label: "SOL",
      tooltip: "Starting SOL token",
      type: "token",
    },
    type: "custom",
  },
  {
    id: "jito_sol",
    position: { x: 400, y: 50 },
    data: {
      label: "JITO SOL",
      tooltip: "JITO staked SOL",
      type: "token",
    },
    type: "custom",
  },
  {
    id: "jup_sol",
    position: { x: 400, y: 250 },
    data: {
      label: "JUP SOL",
      tooltip: "Jupiter staked SOL",
      type: "token",
    },
    type: "custom",
  },
  {
    id: "kamino",
    position: { x: 700, y: 150 },
    data: {
      label: "Kamino",
      tooltip: "Kamino lending protocol",
      type: "protocol",
    },
    type: "custom",
  },
  {
    id: "usdc",
    position: { x: 950, y: 150 },
    data: {
      label: "USDC",
      tooltip: "USDC stablecoin",
      type: "token",
    },
    type: "custom",
  },
  {
    id: "drift",
    position: { x: 1200, y: 150 },
    data: {
      label: "Drift Vault",
      tooltip: "Drift protocol vault",
      type: "protocol",
    },
    type: "custom",
  },
];

const initialEdges: Edge[] = [
  {
    id: "sol-jito",
    source: "sol",
    target: "jito_sol",
    animated: true,
    style: { stroke: "#017AFD" },
    label: "Stake LST",
    labelStyle: { fill: "#ffffff", fontWeight: "500", fontSize: 12 },
    labelBgStyle: { fill: "transparent" },
  },
  {
    id: "sol-jup",
    source: "sol",
    target: "jup_sol",
    animated: true,
    style: { stroke: "#017AFD" },
    label: "Stake LST",
    labelStyle: { fill: "#ffffff", fontWeight: "500", fontSize: 12 },
    labelBgStyle: { fill: "transparent" },
  },
  {
    id: "jito-kamino",
    source: "jito_sol",
    target: "kamino",
    animated: true,
    style: { stroke: "#51D6FF" },
    label: "Lend",
    labelStyle: { fill: "#ffffff", fontWeight: "500", fontSize: 12 },
    labelBgStyle: { fill: "transparent" },
  },
  {
    id: "jup-kamino",
    source: "jup_sol",
    target: "kamino",
    animated: true,
    style: { stroke: "#51D6FF" },
    label: "Lend",
    labelStyle: { fill: "#ffffff", fontWeight: "500", fontSize: 12 },
    labelBgStyle: { fill: "transparent" },
  },
  {
    id: "kamino-usdc",
    source: "kamino",
    target: "usdc",
    animated: true,
    style: { stroke: "#51D6FF" },
    label: "Borrow",
    labelStyle: {
      fill: "#ffffff",
      fontWeight: "500",
      fontSize: 12,
    },
    labelBgStyle: { fill: "transparent" },
  },
  {
    id: "usdc-drift",
    source: "usdc",
    target: "drift",
    animated: true,
    style: { stroke: "#017AFD" },
  },
];

export default function StrategyFlowDemo() {
  const [nodes] = useNodesState<CustomNode>(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden bg-black/80">
      <div className="w-full h-[500px] [&_.react-flow]:pointer-events-none [&_.react-flow__node]:pointer-events-auto [&_.react-flow__controls]:pointer-events-auto [&_.react-flow-slider-wrapper]:pointer-events-auto">
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
