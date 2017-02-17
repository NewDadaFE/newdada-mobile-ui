---
order: 0
title: 普通
---

纯文字、图标，位置

```jsx

<template>
    <div>
        <div v-for="n in 10">
            <group-title><strong>group {{n}}</strong></group-title>
            <group>
                <cell v-for="m in 5">
                    {{n}}-{{m}}
                </cell>
            </group>
        </div>
        <back-to-top />
    </div>
</template>

```
