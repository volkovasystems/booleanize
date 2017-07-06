
const assert = require( "assert" );
const booleanize = require( "./booleanize.js" );

assert.equal( booleanize( true ), true, "should be equal" );

assert.equal( booleanize( false ), false, "should be equal" );

assert.equal( booleanize( "true" ), true, "should be equal" );

assert.equal( booleanize( "false" ), false, "should be equal" );

assert.equal( booleanize( "True" ), true, "should be equal" );

assert.equal( booleanize( "false" ), false, "should be equal" );

assert.equal( booleanize( 1 ), true, "should be equal" );

assert.equal( booleanize( ), false, "should be equal" );

console.log( "ok" );
