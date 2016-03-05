/*:
	@module-license:
		The MIT License (MIT)

		Copyright (c) 2015 Richeve Siodina Bebedor

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"packageName": "booleanize",
			"path": "booleanize/booleanize.js",
			"fileName": "booleanize.js",
			"moduleName": "booleanize",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/booleanize.git"
		}
	@end-module-configuration

	@module-documentation:
	@end-module-documentation

	@include:
	@end-include
*/

if( !( typeof window != "undefined" &&
	"harden" in window ) )
{
	var harden = require( "harden" );
}

if( typeof window != "undefined" && 
	!( "harden" in window ) )
{
	throw new Error( "harden is not defined" ); 
}

var booleanize = function booleanize( entity ){
	/*:
		@meta-configuration:
			{
				"entity:required": "string|boolean|*"
			}
		@end-meta-configuration
	*/

	if( typeof entity == "string" ){
		entity = entity.toLowerCase( );

		if( entity === "false" ){
			return false;
		
		}else if( entity === "true" ){
			return true;
		
		}else{
			return false;
		}

	}else if( typeof entity == "boolean" ){
		return entity;
	
	}else if( typeof entity == "number" ){
		if( entity <= 0 ){
			return false;
		
		}else{
			return true;
		}

	}else if( Array.isArray( entity ) ){
		if( entity.length == 0 ){
			return false;
		
		}else{
			return true;
		}

	}else if( typeof entity == "object" ){
		if( entity === null ){
			return false;
		
		}else if( Object.keys( entity ).length == 0 ){
			return false;
		
		}else{
			return true;
		}

	}else{
		return false;
	}
};

if( typeof module != "undefined" ){ 
	module.exports = booleanize; 
}

if( typeof global != "undefined" ){
	harden
		.bind( booleanize )( "globalize", 
			function globalize( ){
				harden.bind( global )( "booleanize", booleanize );
			} );
}