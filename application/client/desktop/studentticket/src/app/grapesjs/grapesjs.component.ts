import { Component, OnInit } from '@angular/core';
import grapesjs from 'node_modules/grapesjs';

@Component({
  selector: 'app-grapesjs',
  templateUrl: './grapesjs.component.html',
  styleUrls: ['./grapesjs.component.scss']
})
export class GrapesjsComponent implements OnInit {
 

  constructor() { }
  editor:any;
  
  ngOnInit(): void {
  
    this.editor = grapesjs.init({
      
      container: '#gjs',
      fromElement: true,
       // // Size of the editor
        height: '500px',
        width: 'auto',

        blockManager: {
          appendTo: '#blocks',
          blocks: [

         ]
        },
        assetManager: {
          appendTo: '#assets',
           assets:[
            
           ]
         
        },
        panels: { 
      
        },
    });
      const blockManager = this.editor.BlockManager;
    const assetManager = this.editor.AssetManager;
    const panelManager = this.editor.Panels;
    const commands = this.editor.Commands;
     //For adding Assets
     assetManager.add({
      src: 'https://bit.ly/3vBrzTp',
      type: 'image',	//image is default
      width: 200,
      height: 300,
    
    });


    blockManager.add('label', {
      label: 'Label',
      content: '<label>Put your Label here</label>',
      category: 'Basic',
      attributes: {
        title: 'Insert Label block',
      //  class:'fa fa-paragraph'
      },
    });

    blockManager.add('h1-block', {
      label: 'Heading',
      content: '<h1>Put your title here</h1>',
      category: 'Basic',
      select: true,
      activate: true,
     
      attributes: {
      title: 'Insert h1 block',
   //   class:'fa fa-heading'
      }

      });
      blockManager.add('p-block', {
        label: 'Paragraph',
        content: '<p>Put your Parahraph here</p>',
        category: 'Basic',
        attributes: {
          
          title: 'Insert p block',
          class:'fa fa-paragraph'
         
        },
      });
      blockManager.add('img-block', {
        id:'image',
        label: 'Image',
        content: { type: 'image' },
        category: 'Basic',
        select: true,
        
        activate: true,
        attributes: {
          title: 'Insert img block',
          class: 'fa fa-image'
        }
      
      });
      blockManager.add('the-row-block', {
        label: '2 Columns',
        content: `
        <div class="row" data-gjs-droppable=".row-cell" data-gjs-custom-name="Row">
          <div class="row-cell" data-gjs-draggable=".row"></div>
          <div class="row-cell" data-gjs-draggable=".row"></div>
        </div>

        <style>
          .row {
            display: flex;
            justify-content: flex-start;
            align-items: stretch;
            flex-wrap: nowrap;
            padding: 10px;
            min-height: 75px;
          }
          .row-cell {
            flex-grow: 1;
            flex-basis: 100%;
            padding: 5px;
          }
      
        </style>
      `,
      attributes:{class:'fa fa-columns'}
      });

      blockManager.add('INPUT',{
        id:'input',
        label:'Input',
        category:'Basic',
          attributes: { 
            //class:'fa fa-youtube' 
          },
          content:'<div><input class="form-control" type="text"></div>',
          

      });

      panelManager.addPanel({
        id: 'panel-top',
       // el: '.panel__top',
      });
      panelManager.addPanel({
        id: 'basic-actions',
       // el: '.panel__basic-actions',
        buttons: [
          {
            id: 'visibility',
            active: true, // active by default
            className: 'fa fa-address-book',
           // label: '<u>B</u>',
            command: 'sw-visibility', // Built-in command
          }, {
            id: 'export',
            className: 'btn-open-export',
            label: 'Exp',
            command: 'export-template',
            context: 'export-template', // For grouping context of buttons from the same panel
          }, {
            id: 'show-json',
            className: 'btn-show-json',
            label: 'JSON',
            context: 'show-json',
            command(editor) {
              editor.Modal.setTitle('Components JSON')
                .setContent(`<textarea style="width:100%; height: 250px;">
                  ${JSON.stringify(editor.getComponents())}
                </textarea>`)
                .open();
            },

            
          }
          
        ]
      });

      panelManager.addButton('options', [ 
        { id: 'save', 
        className: 'fa fa-floppy-o icon-blank', 
        command: 'save-page',
     //  command:'save-db',
       //command:this.addSaveCommand('save',this.editor),
        // command: function(editor1, sender) { 
        //   if (sender)
        //   sender.set('active', true);
        //  // this.sendpostdata();
        //   this.jj();
  
        // }, 
  
        attributes: { title: 'Save Template' },
       
      }, 
      //this.addSaveCommand('save-page',this.editor)
    
    ]);


     //Adding new input component
     this.editor.DomComponents.addType('input', {
      isComponent: el => el.tagName == 'INPUT',
      model: {
        defaults: {
          traits: [
            // Strings are automatically converted to text types
            'name', // Same as: { type: 'text', name: 'name' }
            'placeholder',
            {
              type: 'select', // Type of the trait
              label: 'Type', // The label you will see in Settings
              name: 'type', // The name of the attribute/property to use on component
              options: [
                { id: 'text', name: 'Text'},
                { id: 'email', name: 'Email'},
                { id: 'password', name: 'Password'},
                { id: 'number', name: 'Number'},
              ]
            }, {
              type: 'checkbox',
              name: 'required',
          }],
          // As by default, traits are binded to attributes, so to define
          // their initial value we can use attributes
          attributes: { type: 'text', required: true },
        },
      },
  });

  


    this.editor.getConfig().showDevices = false;

   }


  addSaveCommand(commandName, editor) {
    //alert();
    const $this = this;
    editor.Commands.add(commandName, {
      run: function (e, n) {
        const eventPopupModel = document.getElementById('myModal');
        eventPopupModel.style.display = 'block';
      }
    });

  }

  closeScreeName() {
    const model = document.getElementById('myModal');
    model.style.display = 'none';
   // const saveButton = this.editor.Panels.getButton('options', 'save-page');
 //   saveButton.set('active', 0);
  }

}
