import React from "react";
import { Classes, Icon, ITreeNode, Tooltip, Tree } from "@blueprintjs/core";

import FilterSidebar from "./common/FilterSidebar";

class ResourceIndexFilterSidebar extends FilterSidebar {
  constructor(props) {
    super(props);

    this.state = {
      nodes: this.getInitialNodes(),
    };
  }

  componentDidMount() {}

  getInitialNodes() {
    return [
      {
        id: 0,
        hasCaret: true,
        isExpanded: true,
        label: "Student Filters",
      },
      {
        id: 1,
        hasCaret: true,
        isExpanded: true,
        label: "Campus Filters",
      },
      {
        id: 2,
        hasCaret: true,
        isExpanded: true,
        label: "Student Filters",
      },
      {
        id: 3,
        hasCaret: true,
        isExpanded: true,
        label: "Level of Urgency",
      },
      {
        id: 4,
        hasCaret: true,
        isExpanded: true,
        label: "Community Filters",
      },
      {
        id: 5,
        icon: "folder-close",
        isExpanded: true,
        label: <Tooltip content="I'm a folder <3">Folder 1</Tooltip>,
        childNodes: [
          {
            id: 2,
            icon: "document",
            label: "Item 0",
            secondaryLabel: (
              <Tooltip content="An eye!">
                <Icon icon="eye-open" />
              </Tooltip>
            ),
          },
          {
            id: 3,
            icon: "tag",
            label:
              "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.",
          },
          {
            id: 4,
            hasCaret: true,
            icon: "folder-close",
            label: <Tooltip content="foo">Folder 2</Tooltip>,
            childNodes: [
              { id: 5, label: "No-Icon Item" },
              { id: 6, icon: "tag", label: "Item 1" },
              {
                id: 7,
                hasCaret: true,
                icon: "folder-close",
                label: "Folder 3",
                childNodes: [
                  { id: 8, icon: "document", label: "Item 0" },
                  { id: 9, icon: "tag", label: "Item 1" },
                ],
              },
            ],
          },
        ],
      },
    ];
  }

  render() {
    return (
      <Tree
        contents={this.state.nodes}
        onNodeClick={this.handleNodeClick}
        onNodeCollapse={this.handleNodeCollapse}
        onNodeExpand={this.handleNodeExpand}
        className={Classes.ELEVATION_1}
      />
    );
  }
}

export default ResourceIndexFilterSidebar;