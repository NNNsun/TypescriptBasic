/**
 * Omit Type
 */
interface Post{
    title: string
    content: string
    createdAt:Date
}

function createPost(post:Omit<Post,'createdAt'>):Post { // 무시하고싶은 프로퍼티
    return {
        ...post,
        createdAt: new Date()
    }
}

createPost({
    title: '요즘 개발자 취업 어떤가요?',
    content: '나이 30넘어서도 해볼반한가요?',
})

