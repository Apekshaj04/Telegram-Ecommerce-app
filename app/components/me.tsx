'use client'

import { useTMA } from "./tma/Hook"

export function ME(){
    const {user}=useTMA();
    return <pre>
        user:{user.username}
    </pre>
}