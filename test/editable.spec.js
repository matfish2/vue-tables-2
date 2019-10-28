// describe(suite + ': Editable', () => {
//     it('can edit a checkbox', (done) => {
//         createWrapper({debounce: 0}, ['checkbox'], {}, [
//             {id: 1, checkbox: true},
//             {id: 2, checkbox: false},
//             {id: 3, checkbox: true},
//         ], {
//             checkbox: '<input class="my-checkbox" type="checkbox" v-model="props.row.checkbox" @input="props.update">'
//         });
//
//         click('.my-checkbox:first-child');
//
//         // an input event with updated table data should be triggered.
//         // if 'data' prop is replaced with v-model data will be automatically synced
//         run(() => {
//             eventEmitted('input', [
//                 {id: 1, checkbox: false},
//                 {id: 2, checkbox: false},
//                 {id: 3, checkbox: true},
//             ]);
//         }, done);
//
//     });
//
//     it('can edit a text field', (done) => {
//         createWrapper({debounce: 0}, ['text'], {}, [
//             {id: 1, text: 'One'},
//             {id: 2, text: 'Two'},
//             {id: 3, text: 'Three'},
//         ], {
//             text: '<input class="my-text" type="text" v-model="props.row.text" @input="props.update">'
//         });
//
//         type('table tbody tr:nth-child(2) .my-text', 'Awesome');
//
//         // an input event with updated table data should be triggered.
//         // if 'data' prop is replaced with v-model data will be automatically synced
//         run(() => {
//             eventEmitted('input', [
//                 {id: 1, text: 'One'},
//                 {id: 2, text: 'Awesome'},
//                 {id: 3, text: 'Three'},
//             ]);
//         }, done);
//     });
//
//
//     it('can toggle edit state', (done) => {
//         createWrapper({debounce: 0}, ['text'], {}, [
//             {id: 1, text: 'One'},
//             {id: 2, text: 'Two'},
//             {id: 3, text: 'Three'},
//         ], {
//             text: '<div><span class="setEdit" @click="props.setEditing(true)" v-if="!props.isEditing()">{{props.row.text}} </span> <span v-else> <input type="text" v-model="props.row.text"> <button type="button" @click="props.update(row.text); props.setEditing(false)">Submit</button> </span> </div>'
//         });
//
//         click('table tbody tr:nth-child(2) .setEdit');
//
//         // an input event with updated table data should be triggered.
//         // if 'data' prop is replaced with v-model data will be automatically synced
//         run(() => {
//             exists('input', 'table tbody tr:nth-child(2)')
//         }, done);
//     });
//
//     it('can edit on enter py passed value', (done) => {
//         createWrapper({debounce: 0}, ['text'], {}, [
//             {id: 1, text: 'One'},
//             {id: 2, text: 'Two'},
//             {id: 3, text: 'Three'},
//         ], {
//             text: '<div><span class="setEdit" @click="props.setEditing(true)" v-if="!props.isEditing()">{{props.row.text}} </span> <span v-else> <input type="text" v-model="props.row.text"> <button type="button" @click="props.setEditing(false);props.update(props.row.text);">Submit</button> </span> </div>'
//         });
//
//         click('table tbody tr:nth-child(2) .setEdit');
//         setTimeout(() => {
//             type('table tbody tr:nth-child(2) input', 'Changed!');
//             click('table tbody tr:nth-child(2) button');
//         }, 100);
//
//         // an input event with updated table data should be triggered.
//         // if 'data' prop is replaced with v-model data will be automatically synced
//         run(() => {
//             not_exists('input', 'table tbody tr:nth-child(2)');
//             eventEmitted('input', [
//                 {id: 1, text: 'One'},
//                 {id: 2, text: 'Changed!'},
//                 {id: 3, text: 'Three'},
//             ]);
//
//         }, done, 300);
//     });
//
//     it('triggers an update event', (done) => {
//         createWrapper({debounce: 0}, ['checkbox'], {}, [
//             {id: 1, checkbox: true},
//             {id: 2, checkbox: false},
//             {id: 3, checkbox: true},
//         ], {
//             checkbox: '<input class="my-checkbox" type="checkbox" v-model="props.row.checkbox" @input="props.update">'
//         });
//
//         click('.my-checkbox:first-child');
//
//         // an input event with updated table data should be triggered.
//         // if 'data' prop is replaced with v-model data will be automatically synced
//         run(() => {
//             eventEmitted('update', {
//                 row:{id: 1, checkbox: false},
//                 column:'checkbox',
//                 oldVal: true,
//                 newVal: false
//             });
//         }, done);
//
//     });
// })
// ;
