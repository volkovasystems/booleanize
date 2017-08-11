
const assert = require( "assert" );
const booleanize = require( "./booleanize.js" );

assert.equal( booleanize( true ), true, "should be equal to true" );

assert.equal( booleanize( "true" ), true, "should be equal to true" );

assert.equal( booleanize( "True" ), true, "should be equal to true" );

assert.equal( booleanize( 1 ), true, "should be equal to true" );

assert.equal( booleanize( "false" ), false, "should be equal to false" );

assert.equal( booleanize( false ), false, "should be equal to false" );

assert.equal( booleanize( ), false, "should be equal to false" );

console.log( "ok" );
