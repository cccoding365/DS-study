const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
}

// 先序遍历
function preOrder(root) {
  // 递归边界，root 为空
  if (!root) {
    return
  }
  // 输出当前遍历的结点值
  console.log('当前遍历的结点值是：', root.val)
  // 递归遍历左子树 
  preOrder(root.left)
  // 递归遍历右子树  
  preOrder(root.right)
}

// 中序遍历
function inOrder(root) {
  // 递归边界，root 为空
  if (!root) {
    return
  }
  // 递归遍历左子树 
  inOrder(root.left)
  // 输出当前遍历的结点值
  console.log('当前遍历的结点值是：', root.val)
  // 递归遍历右子树  
  inOrder(root.right)
}

// 后序遍历
function postOrder(root) {
  // 递归边界，root 为空
  if (!root) {
    return
  }
  // 递归遍历左子树 
  postOrder(root.left)
  // 递归遍历右子树  
  postOrder(root.right)
  // 输出当前遍历的结点值
  console.log('当前遍历的结点值是：', root.val)
}

preOrder(root)
// inOrder(root)
// postOrder(root)