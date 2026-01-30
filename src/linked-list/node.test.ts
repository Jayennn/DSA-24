import { describe, it, expect } from "bun:test";
import { Node } from "./node";

describe("Node", () => {
  it("should create a node with data", () => {
    const node = new Node<number>(10);
    expect(node.data).toBe(10);
  });

  it("should initialize next as null", () => {
    const node = new Node<string>("hello");
    expect(node.next).toBeNull();
  });

  it("should link two nodes together", () => {
    const node1 = new Node<number>(1);
    const node2 = new Node<number>(2);

    node1.next = node2;

    expect(node1.next).toBe(node2);
    expect(node1.next.data).toBe(2);
  });

  it("should work with different data types", () => {
    const stringNode = new Node<string>("test");
    const numberNode = new Node<number>(42);
    const objectNode = new Node<{ name: string }>({ name: "object" });

    expect(stringNode.data).toBe("test");
    expect(numberNode.data).toBe(42);
    expect(objectNode.data.name).toBe("object");
  });

  it("should create a chain of nodes", () => {
    const node1 = new Node<number>(1);
    const node2 = new Node<number>(2);
    const node3 = new Node<number>(3);

    node1.next = node2;
    node2.next = node3;

    expect(node1.next?.next?.data).toBe(3);
  });
});
