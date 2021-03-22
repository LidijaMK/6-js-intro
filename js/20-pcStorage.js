/*
Duota kietojo disko duomenu struktura (folder > file), reikia suskaiciuoti kiek vietos uzima visi failai.

Folder uzima 0 vietos.
*/

function storage () {
    return 0;
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
            name: 'Windowa',
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


const totalKBs = storage(pc);
console.log('Use space:', totalKBs, 'KB');
