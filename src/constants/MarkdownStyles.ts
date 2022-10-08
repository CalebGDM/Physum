import {StyleSheet} from 'react-native'
import Colors from './Colors'
import { Title } from './Texts'


export const getCurrTheme = (props: {theme: string}) => {
    const cur = props.theme
    return cur
}



export const MarkdownStyles = StyleSheet.create ({
    body: {
        
    },
    heading1: {
        color: Colors[curTheme].neutral[900]
    },
    heading2: {
        color: 'red'
    },
    heading3: {
        color: 'red'
    },
    heading4: {
        
    },
    heading5: {
        
    },
    heading6: {
        
    },
    hr: {
        
    },
    strong: {
        
    },
    em: {
        
    },
    s: {
        
    },
    blockquote: {
        
    },
    bullet_list: {
        
    },
    ordered_list: {
        
    },
    list_item: {
        
    },
    code_inline: {
        
    },
    code_block: {
        
    },
    fence: {
        
    },
    table: {
        
    },
    thead: {
        
    },
    tbody: {
        
    },
    th: {
        
    },
    tr: {
        
    },
    td: {
        
    },
    link: {
        
    },
    blocklink: {
        
    },
    image: {
        
    },	
    text: {
        
    },	
    textgroup: {
        
    },
    paragraph: {
        
    },
    hardbreak: {
        
    },
    softbreak: {
        
    },
    pre: {
        
    },
    inline: {
        
    },
    span: {
        
    },
})