// Filename:    ScriptControlEvents.js
// Author:      Leonard Daly and Don Brutzman
// Identifier:  http://X3dGraphics.com/examples/X3dForWebAuthors/Chapter09-EventUtilitiesScripting/ScriptComplexStateEvents.js
// Created:     10 June 2006
// Revised:     26 February 2008
// Reference:   http://www.web3d.org/x3d/content/examples/X3dSceneAuthoringHints.html#Scripts
// License:     http://X3dGraphics.com/examples/X3dForWebAuthors/license.html

function initialize () 
{
    displayEventTime ('ScriptControlEvents initialize() ...');
}
function shutdown () 
{
    displayEventTime ('... ScriptControlEvents shutdown()');
}
function prepareEvents () 
{
    displayEventTime ('Start of Event Loop');
}
function eventsProcessed () 
{
    displayEventTime ('End of Event Loop');
}
function displayEventTime (string) 
{
    time = Date.toLocalString();
    Browser.print ('[' + time + '] ' + string);
}
function buttonMotionDone (value) 
{
    if (! value) // activate on false value, i.e. deselection (unclick)
    {
        if (buttonDown) 
        {
            motion = new MFVec3f (new SFVec3f(0, .05, 0), new SFVec3f(0, .25, 0));
            buttonDown = false;
            lightColor = new SFColor (1, 1, 0);

        } 
        else 
        {
            motion = new MFVec3f (new SFVec3f(0, .25, 0), new SFVec3f(0, .05, 0));
            buttonDown = true;
            lightColor = new SFColor (.4, .4, .4);
        }
    }
}
        