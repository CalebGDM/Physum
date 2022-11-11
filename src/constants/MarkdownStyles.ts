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
        fontFamily: 'nunito-bold',
        fontSize: 40,
    },
    heading2: {
        fontFamily: 'nunito-bold',
        fontSize: 35,
        
    },
    heading3: {
        fontFamily: 'nunito-bold',
        fontSize: 32,
        
    },
    heading4: {
        fontFamily: 'nunito-bold',
        fontSize: 24,
       
    },
    heading5: {
        fontFamily: 'nunito-bold',
        fontSize: 20,
        
    },
    heading6: {
        fontFamily: 'fredoka',
        fontSize: 15,
        
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
        borderColor: Colors.light.neutral[300],
        borderWidth: 5,
        fontFamily: 'nunito-bold',
        color: Colors.light.neutral[500]
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
        fontFamily: 'nunito-medium',
        
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