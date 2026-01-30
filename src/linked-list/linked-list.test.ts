import { describe, it, expect } from "bun:test";
import { LinkedList } from "./linked-list";

describe("LinkedList", () => {
  it("should initialize with empty list", () => {
    const list = new LinkedList<number>();
    // List should be created without errors
    expect(list).toBeDefined();
  });

  it("should append a single element", () => {
    const list = new LinkedList<number>();
    list.append(10);
    // No error should be thrown
    expect(list).toBeDefined();
  });

  it("should append multiple elements", () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list).toBeDefined();
  });

  it("should work with string data type", () => {
    const list = new LinkedList<string>();
    list.append("hello");
    list.append("world");
    expect(list).toBeDefined();
  });

  it("should work with object data type", () => {
    const list = new LinkedList<{ name: string; age: number }>();
    list.append({ name: "Alice", age: 30 });
    list.append({ name: "Bob", age: 25 });
    expect(list).toBeDefined();
  });

  it("should traverse and print without errors", () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);

    // Capture console output
    let output = "";
    const originalLog = console.log;
    console.log = (msg: string) => {
      output = msg;
    };

    list.traverse();

    console.log = originalLog;

    expect(output).toContain("1 ->");
    expect(output).toContain("2 ->");
    expect(output).toContain("3 ->");
    expect(output).toContain("null");
  });

  it("should traverse empty list", () => {
    const list = new LinkedList<number>();

    let output = "";
    const originalLog = console.log;
    console.log = (msg: string) => {
      output = msg;
    };

    list.traverse();

    console.log = originalLog;

    expect(output).toBe("null");
  });

  it("should handle single element traverse", () => {
    const list = new LinkedList<string>();
    list.append("single");

    let output = "";
    const originalLog = console.log;
    console.log = (msg: string) => {
      output = msg;
    };

    list.traverse();

    console.log = originalLog;

    expect(output).toContain("single");
    expect(output).toContain("null");
  });
});
