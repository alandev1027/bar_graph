import React, { useEffect, useState } from "react";
import { getNodeLists } from "../../utils";
import { NodeMap } from "../../utils/constants";
import { Select } from "antd";
import { DropOutChart } from "../../components";
import "./Main.scss";

const { Option } = Select;

export default function Main() {
  const [nodeLists, setNodeLists] = useState([]);
  const [branches, setBranches] = useState([]);
  const [currenBranch, setCurrentBranch] = useState(0);

  useEffect(() => {
    const nNodeLists = getNodeLists(NodeMap);
    if (nNodeLists && nNodeLists.length) {
      setNodeLists(nNodeLists);
      const nBranches = nNodeLists.map((list) => list.slice(-1));
      setBranches(nBranches);
      setCurrentBranch(0);
    }
  }, []);

  return (
    <div className="main-container">
      <div className="dropout-container">
        <Select
          defaultValue={currenBranch}
          onChange={(val) => setCurrentBranch(val)}
          style={{ width: 150 }}
        >
          {branches.map((branch, index) => (
            <Option key={`${index}_${branch}`} value={index}>
              {branch}
            </Option>
          ))}
        </Select>
        <DropOutChart nodeLists={nodeLists} currenBranch={currenBranch} />
      </div>
    </div>
  );
}
