var addTwoNumbers = function (l1, l2) {
    var result = new ListNode(null);
    var c = result;
    do {
        var v1 = l1 != null ? l1.val : 0;
        var v2 = l2 != null ? l2.val : 0;
        if (c.next != null) {
            var x = v1 + v2 + c.next.val;
            if (x >= 10) {
                c.next = new ListNode(x % 10);
                c.next.next = new ListNode(Math.floor(x / 10));
            }
            else {
                c.next = new ListNode((v1 + v2 + c.next.val));
            }
        }
        else {
            if (v1 + v2 >= 10) {
                c.next = new ListNode((v1 + v2) % 10);
                c.next.next = new ListNode(Math.floor((v1 + v2) / 10));
            }
            else {
                c.next = new ListNode((v1 + v2));
            }
        }
        c = c.next;
        l1 = l1 != null ? l1.next : null;
        l2 = l2 != null ? l2.next : null;
    } while ((l1 != null || l2 != null || c.next != null));
    var r = [];
    result = result.next;
    while (result.next != null) {
        r.push(result.val);
        result = result.next;
    }
    r.push(result.val);
    return r;
};
