import { Node } from "./node";

class LinkedList<T> {
  private head: Node<T> | null = null;

  append(data: T): void {
    const newNode: Node<T> = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let last = this.head;

    while (last.next !== null) {
      last = last.next;
    }

    last.next = newNode;
  }

  traverse(): void {
    let current = this.head;
    let result = "";

    while (current !== null) {
      result += `${current.data} -> `;
      current = current.next;
    }

    result += `null`;
    console.log(result);
  }
}

export { LinkedList };
