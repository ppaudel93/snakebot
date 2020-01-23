import formats from 'newbot-formats'
import code from './main.converse'

import helloSkill from './skills/hello/hello'
import commandsSkill from './skills/command-list/commands'
import changeNameSkill from './skills/change-name/change-name'

export default {
    code,
    skills: {
        formats,
        helloSkill,
        commandsSkill,
        changeNameSkill,
    },
    formats: {
        buttons(text, params) {
            return {
                buttons: params[0],
                size: params[1],
                text
            } 
        },
        
        endWithSmiley(text) {
            return text + ' :)'
        }
    }
}