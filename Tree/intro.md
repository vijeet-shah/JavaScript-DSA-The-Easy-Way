Non-Linear data structure use hierarchical data that consit of node connected by edges.

Application Of Tree:

**1. Organization Structure:**
Trees are commonly used to represent organizational hierarchies. Each level of the tree corresponds to a different level of management within the organization. For example, a CEO might be at the root, followed by different departments, teams, and individual employees.

**2. Folder Structure/Directory Structure:**
Trees are an excellent way to model file systems. Each node in the tree represents a directory, and child nodes represent subdirectories or files contained within those directories.

**3. HTML / XML / JSON Object:**
In web development and data interchange, trees are used to represent hierarchical structures. HTML elements, XML tags, and JSON objects can all be visualized as trees. This structure makes it easy to parse and manipulate data.

**4. Binary Search Tree (BST):**
A BST is a binary tree with a specific property: for each node, all nodes in the left subtree have values less than the node's value, and all nodes in the right subtree have values greater than the node's value. BSTs are used for efficient searching, insertion, and deletion operations.

**5. DBMS Indexing (Hashing, B-tree, B+-tree):**
Database management systems use tree structures like B-trees and B+-trees for indexing purposes. These trees allow efficient storage and retrieval of data in databases, ensuring that operations like searching, insertion, and deletion are performed quickly.

**6. Parse Tree/Expression Tree:**
In compilers and interpreters, parse trees are used to represent the syntactic structure of a program. Expression trees are a type of parse tree specifically used to represent mathematical expressions, making it easier to evaluate them.

**7. Binary Heap:**
Binary heaps are used in priority queues and heap sort algorithms. They are often used to efficiently retrieve the highest (or lowest) priority element from a collection.

Each of these applications demonstrates how trees are a versatile and powerful data structure for organizing, representing, and efficiently managing hierarchical and structured data. Understanding how to model real-world problems using trees is a crucial skill for software development.

**Tree Terminology :**
**1. Node:** Each element in a tree is represented by a node. A node contains data and a reference to its child nodes.

**2. Parent Node:** A parent node is a node that has child nodes originating from it.

**3. Child Node:** A child node is a node that is linked to a parent node.

**4. Root:** The root is the topmost node in a tree. It has no parent and serves as the starting point for traversing the tree.

**5. Leaf Node:** A leaf node is a node with no children, meaning it's at the end of a branch in the tree.

**6. Internal Node (Non-Leaf):** An internal node is a node with at least one child.

**7. Degree of Node:** The degree of a node refers to the number of children it has. For example, a node with three children has a degree of three.

**8. Height of Node:** The height of a node is the length of the longest path from that node to a leaf node. In simpler terms, it's the depth of the deepest subtree rooted at that node.

**9. Level/Depth of Node:** The level or depth of a node is the length of the path from the root to that node.

**10. Generation:** A generation refers to a set of nodes at the same level in the tree.

**11. Ancestor of Node:** An ancestor of a node is any node on the path from the root to that node, excluding the node itself.

**12. Descendant:** A descendant of a node is any node reachable by following paths down from that node.

**13. Siblings:** Siblings are nodes that share the same parent.

**14. Size of Node:** The size of a node is the number of descendants it has, including itself.

Now, let's see these concepts in action with an example:

Consider a tree representing an organizational structure:
          CEO
        /   |   \
    CTO   CFO   CMO
   / | \
Eng  Prod  Des
```

- CEO is the root.
- CEO is a parent node to CTO, CFO, and CMO.
- CTO, CFO, and CMO are child nodes of CEO.
- Eng, Prod, and Des are child nodes of CTO.
- Eng, Prod, and Des are leaf nodes.
- CTO is an internal node.
- CEO has a degree of 3.
- The height of CEO is 2 (longest path to a leaf).
- The level of Eng is 3.
- Eng and Prod are siblings.
- The size of CTO is 4 (including itself and its descendants).
