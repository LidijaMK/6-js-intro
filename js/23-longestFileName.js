/*
Duota kietojo disko duomenu struktura (folder > file), reikia surasti ilgiausio failo pavadinima.
*/

function longestFile(folder) {
    let nameLength = folder.name.length;
    if (folder.content) {
        for (let i = 0; i < folder.content.length; i++) {
            const child = folder.content[i];
            if (child.type === 'file') {
                const childNameLength = child.name.length
                if (childNameLength > nameLength) {
                nameLength = childNameLength;
                }
            } else if (child.type === 'folder') {
                const childNameLength = longestFile(child)
                if (childNameLength > nameLength) {
                nameLength = childNameLength;
                }
            }
 
        }
 
    }    
    return nameLength;
}



const pc = {
    name: 'C',
    type: 'folder',
    content: [
        {
            name: 'Programs',
            type: 'folder',
            content: [
                {
                    name: 'Andoid',
                    type: 'file',
                    content: []
                },
                {
                    name: 'GIMP 2',
                    type: 'folder',
                    content: [
                        {
                            name: 'dbghelp.dll',
                            type: 'file',
                            size: 1497,
                            sizeUnits: 'kb'
                        },
                        {
                            name: 'gimp-2.10.exe',
                            type: 'file',
                            size: 9138,
                            sizeUnits: 'kb'
                        }
                    ]
                },
            ]
        },
        {
            name: 'Windows',
            type: 'folder',
            content: [
                {
                    name: 'DiagTrack',
                    type: 'folder',
                    content: [
                        {
                            name: 'analyticsevents.dat',
                            type: 'file',
                            size: 2,
                            sizeUnits: 'kb'
                        },
                        {
                            name: 'utc.allow.diffbase',
                            type: 'file',
                            size: 468,
                            sizeUnits: 'kb'
                        }
                    ]
               }
            ]
        },
        {
            name: 'msdia80.d11',
            type: 'file',
            size: 884,
            sizeUnits: 'kb'
        }
    ]
}


const fileName = longestFile(pc);
console.log('longest file name:', fileName);
