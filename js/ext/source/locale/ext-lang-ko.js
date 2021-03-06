﻿/*
 * Ext JS Library 2.1
 * Copyright(c) 2006-2008, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * Korean Translations
 * By nicetip
 * 05 September 2007
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">...</div>';

if(Ext.View){
   Ext.View.prototype.emptyText = "";
}

if(Ext.grid.Grid){
   Ext.grid.Grid.prototype.ddText = "{0}  .";
}

if(Ext.TabPanelItem){
   Ext.TabPanelItem.prototype.closeText = "";
}

if(Ext.form.Field){
   Ext.form.Field.prototype.invalidText = "  .";
}

if(Ext.LoadMask){
    Ext.LoadMask.prototype.msg = "...";
}

Date.monthNames = [
   "1",
   "2",
   "3",
   "4",
   "5",
   "6",
   "7",
   "8",
   "9",
   "10",
   "11",
   "12"
];

Date.dayNames = [
   "",
   "",
   "",
   "",
   "",
   "",
   ""
];

if(Ext.MessageBox){
   Ext.MessageBox.buttonText = {
      ok     : "",
      cancel : "",
      yes    : "",
      no     : ""
   };
}

if(Ext.util.Format){
   Ext.util.Format.date = function(v, format){
      if(!v) return "";
      if(!(v instanceof Date)) v = new Date(Date.parse(v));
      return v.dateFormat(format || "m/d/Y");
   };
}

if(Ext.DatePicker){
   Ext.apply(Ext.DatePicker.prototype, {
      todayText         : "",
      minText           : "  .",
      maxText           : "  .",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames	: Date.monthNames,
      dayNames		: Date.dayNames,
      nextText          : '(+ )',
      prevText          : ' (+ )',
      monthYearText     : ' . (+/ )',
      todayTip          : "{0} ()",
      format            : "m/d/y",
      okText		: "",
      cancelText	: "",
      startDay		: 0
   });
}

if(Ext.PagingToolbar){
   Ext.apply(Ext.PagingToolbar.prototype, {
      beforePageText : "",
      afterPageText  : "/ {0}",
      firstText      : " ",
      prevText       : " ",
      nextText       : " ",
      lastText       : " ",
      refreshText    : "",
      displayMsg     : " {2}  {0} - {1}",
      emptyMsg       : '  .'
   });
}

if(Ext.form.TextField){
   Ext.apply(Ext.form.TextField.prototype, {
      minLengthText : " {0}.",
      maxLengthText : " {0}.",
      blankText     : " .",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext.form.NumberField){
   Ext.apply(Ext.form.NumberField.prototype, {
      minText : " {0}.",
      maxText : " {0}.",
      nanText : "{0}   ."
   });
}

if(Ext.form.DateField){
   Ext.apply(Ext.form.DateField.prototype, {
      disabledDaysText  : "",
      disabledDatesText : "",
      minText           : "{0}  .",
      maxText           : "{0}  .",
      invalidText       : "{0}   . -    . {1}",
      format            : "m/d/y"
   });
}

if(Ext.form.ComboBox){
   Ext.apply(Ext.form.ComboBox.prototype, {
      loadingText       : "...",
      valueNotFoundText : undefined
   });
}

if(Ext.form.VTypes){
   Ext.apply(Ext.form.VTypes, {
      emailText    : '    . (: "user@domain.com")',
      urlText      : 'URL   . (: "http:/'+'/www.domain.com")',
      alphaText    : ', (_)   .',
      alphanumText : ', , (_)   .'
   });
}

if(Ext.form.HtmlEditor){
   Ext.apply(Ext.form.HtmlEditor.prototype, {
	 createLinkText : 'URL :',
	 buttonTips : {
            bold : {
               title: ' (Ctrl+B)',
               text: '   .',
               cls: 'x-html-editor-tip'
            },
            italic : {
               title: ' (Ctrl+I)',
               text: '   .',
               cls: 'x-html-editor-tip'
            },
            underline : {
               title: ' (Ctrl+U)',
               text: '   .',
               cls: 'x-html-editor-tip'
           },
           increasefontsize : {
               title: ' ',
               text: '   .',
               cls: 'x-html-editor-tip'
           },
           decreasefontsize : {
               title: ' ',
               text: '   .',
               cls: 'x-html-editor-tip'
           },
           backcolor : {
               title: '  ',
               text: '   .',
               cls: 'x-html-editor-tip'
           },
           forecolor : {
               title: '',
               text: '   .',
               cls: 'x-html-editor-tip'
           },
           justifyleft : {
               title: '  ',
               text: '  .',
               cls: 'x-html-editor-tip'
           },
           justifycenter : {
               title: ' ',
               text: '  .',
               cls: 'x-html-editor-tip'
           },
           justifyright : {
               title: '  ',
               text: '  .',
               cls: 'x-html-editor-tip'
           },
           insertunorderedlist : {
               title: ' ',
               text: '   .',
               cls: 'x-html-editor-tip'
           },
           insertorderedlist : {
               title: ' ',
               text: '   .',
               cls: 'x-html-editor-tip'
           },
           createlink : {
               title: '',
               text: '   .',
               cls: 'x-html-editor-tip'
           },
           sourceedit : {
               title: '',
               text: '  .',
               cls: 'x-html-editor-tip'
           }
        }
   });
}

if(Ext.grid.GridView){
   Ext.apply(Ext.grid.GridView.prototype, {
      sortAscText  : " ",
      sortDescText : " ",
      lockText     : " ",
      unlockText   : " ",
      columnsText  : " "
   });
}

if(Ext.grid.PropertyColumnModel){
   Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
      nameText   : "",
      valueText  : "",
      dateFormat : "m/j/Y"
   });
}

if(Ext.layout.BorderLayout.SplitRegion){
   Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "  .",
      collapsibleSplitTip : "  ,    ."
   });
}

