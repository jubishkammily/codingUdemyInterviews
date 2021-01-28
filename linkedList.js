console.log("Linked List Test ")

class Node{
  constructor(_value){
    this.value = _value,
    this.next = null
    
  }
}

class LinkedList{
  constructor(_value){
    this.head = {
      value:_value,
      next:null
    }
    this.tail = this.head;
    this.length = 1
  }

  append(value){
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length = this.length + 1
    return this;
  }


  prepend(value){
    const node = new Node(value);
    node.next = this.head       
    this.head = node
    this.length = this.length +1
    return this;
  }

}




const linkList = new LinkedList(10);
console.log(linkList);
linkList.append(5);
console.log(linkList);
linkList.append(16);
console.log(linkList);
console.log(linkList.prepend(4));

