"use client";

import React, { useState } from "react";
import { Terminal, Code2, Database, Sparkles, Check } from "lucide-react";

export function HeroVisual() {
  const [activeTab, setActiveTab] = useState<"cpp" | "sql" | "python">("cpp");

  const codeSnippets = {
    cpp: {
      filename: "BinarySearchTree.cpp",
      lang: "C++20",
      code: `template <typename T>
class Node {
public:
    T value;
    std::unique_ptr<Node> left;
    std::unique_ptr<Node> right;
    explicit Node(T val) : value(val) {}
};

// Algorithmic efficiency & memory management
bool search(const std::unique_ptr<Node<int>>& root, int key) {
    if (!root) return false;
    if (root->value == key) return true;
    return key < root->value ? search(root->left, key) 
                             : search(root->right, key);
}`,
      output: "BST query resolved in O(log n) time.",
    },
    python: {
      filename: "app_pipeline.py",
      lang: "Python 3.12",
      code: `def process_dataset(records: list[dict]) -> dict:
    """Parses application events and aggregates performance metrics."""
    aggregated = defaultdict(int)
    for entry in records:
        if entry.get("status") == "resolved":
            aggregated[entry["category"]] += 1
    return dict(aggregated)`,
      output: "Dataset parsed: 1,420 events indexed.",
    },
    sql: {
      filename: "analytics_schema.sql",
      lang: "PostgreSQL",
      code: `SELECT 
    student_id,
    course_code,
    AVG(grade_score) OVER (PARTITION BY student_id) AS gpa
FROM course_enrollments
WHERE enrollment_year = 2026
ORDER BY gpa DESC;`,
      output: "Query executed in 1.4ms with index scan.",
    },
  };

  const activeData = codeSnippets[activeTab];

  return (
    <div className="w-full max-w-[500px] rounded-xl bg-[#0e1117] border border-[rgba(255,255,255,0.08)] shadow-2xl overflow-hidden select-none">
      {/* Window Title Bar */}
      <div className="px-4 py-3 bg-[#141923] border-b border-[rgba(255,255,255,0.06)] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ef4444]/60 border border-[#ef4444]/80" />
          <div className="w-3 h-3 rounded-full bg-[#f59e0b]/60 border border-[#f59e0b]/80" />
          <div className="w-3 h-3 rounded-full bg-[#10b981]/60 border border-[#10b981]/80" />
          <span className="ml-2 font-mono text-xs text-[#9aa4b2]">
            {activeData.filename}
          </span>
        </div>
        <div className="flex items-center gap-1 font-mono text-[10px] text-[#38bdf8] bg-[#38bdf8]/10 px-2 py-0.5 rounded">
          <span>{activeData.lang}</span>
        </div>
      </div>

      {/* Language Selector Tabs */}
      <div className="px-4 py-2 bg-[#090a0f] border-b border-[rgba(255,255,255,0.04)] flex items-center gap-2 text-xs font-mono">
        <button
          onClick={() => setActiveTab("cpp")}
          className={`px-2.5 py-1 rounded transition-colors ${
            activeTab === "cpp"
              ? "bg-[#141923] text-[#38bdf8] font-semibold"
              : "text-[#5d6778] hover:text-[#9aa4b2]"
          }`}
        >
          C++ Core
        </button>
        <button
          onClick={() => setActiveTab("python")}
          className={`px-2.5 py-1 rounded transition-colors ${
            activeTab === "python"
              ? "bg-[#141923] text-[#38bdf8] font-semibold"
              : "text-[#5d6778] hover:text-[#9aa4b2]"
          }`}
        >
          Python Logic
        </button>
        <button
          onClick={() => setActiveTab("sql")}
          className={`px-2.5 py-1 rounded transition-colors ${
            activeTab === "sql"
              ? "bg-[#141923] text-[#38bdf8] font-semibold"
              : "text-[#5d6778] hover:text-[#9aa4b2]"
          }`}
        >
          SQL Schema
        </button>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed text-[#f0f3f8] overflow-x-auto bg-[#0e1117]">
        <pre className="font-mono text-xs text-[#9aa4b2]">
          <code>{activeData.code}</code>
        </pre>
      </div>

      {/* Terminal Output Strip */}
      <div className="px-4 py-2.5 bg-[#090a0f] border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between text-[11px] font-mono">
        <div className="flex items-center gap-2 text-[#5d6778]">
          <Terminal className="w-3.5 h-3.5 text-[#38bdf8]" />
          <span className="text-[#9aa4b2]">{activeData.output}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[#10b981]">
          <Check className="w-3 h-3" />
          <span>VALID</span>
        </div>
      </div>
    </div>
  );
}
