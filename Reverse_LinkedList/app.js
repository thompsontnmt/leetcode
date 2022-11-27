var head = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var reverseList = function(head) {
    let temp, newHead = null;
    while (head !== null) {
        temp = head;
        head = head.next;
        temp.next = newHead;
        newHead = temp;
    }
    console.log(newHead);
    return newHead;

}
reverseList(head);