var mergeTwoLists = (list1, list2) => {
    let dummy = Node();
    let p = dummy;
    let l1, l2 = list1, list2;

    while (l1 && l2 !== null) {
        if (l1.val < l2.val) {
            p.next = l1;
            l1 = l1.next;
            
        }
    }
}