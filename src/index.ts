import { LinkedList } from "./linked-list/linked-list";

const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);

console.log(linkedList.traverse());
