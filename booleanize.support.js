"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
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
              			"package": "booleanize",
              			"path": "booleanize/booleanize.js",
              			"file": "booleanize.js",
              			"module": "booleanize",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/booleanize.git",
              			"test": "booleanize-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Evaluate string if "true" or "false".
              	@end-module-documentation
              
              	@include:
              		{
              			"truly": "truly"
              		}
              	@end-include
              */

var truly = require("truly");

var booleanize = function booleanize(entity) {
	/*;
                                              	@meta-configuration:
                                              		{
                                              			"entity:required": [
                                              				"string",
                                              				"boolean",
                                              				"*"
                                              			]
                                              		}
                                              	@end-meta-configuration
                                              */

	if (typeof entity == "string") {
		if (entity.toLowerCase() == "true") {
			return true;
		}

		if (entity.toLowerCase() == "false") {
			return false;
		}
	}

	if (typeof entity == "boolean") {
		return entity;
	}

	return truly(entity);
};

module.exports = booleanize;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2xlYW5pemUuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJ0cnVseSIsInJlcXVpcmUiLCJib29sZWFuaXplIiwiZW50aXR5IiwidG9Mb3dlckNhc2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9EQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFJQyxhQUFhLFNBQVNBLFVBQVQsQ0FBcUJDLE1BQXJCLEVBQTZCO0FBQzdDOzs7Ozs7Ozs7Ozs7QUFZQSxLQUFJLE9BQU9BLE1BQVAsSUFBaUIsUUFBckIsRUFBK0I7QUFDOUIsTUFBSUEsT0FBT0MsV0FBUCxNQUF5QixNQUE3QixFQUFxQztBQUNwQyxVQUFPLElBQVA7QUFDQTs7QUFFRCxNQUFJRCxPQUFPQyxXQUFQLE1BQXlCLE9BQTdCLEVBQXNDO0FBQ3JDLFVBQU8sS0FBUDtBQUNBO0FBQ0Q7O0FBRUQsS0FBSSxPQUFPRCxNQUFQLElBQWlCLFNBQXJCLEVBQWdDO0FBQy9CLFNBQU9BLE1BQVA7QUFDQTs7QUFFRCxRQUFPSCxNQUFPRyxNQUFQLENBQVA7QUFDQSxDQTVCRDs7QUE4QkFFLE9BQU9DLE9BQVAsR0FBaUJKLFVBQWpCIiwiZmlsZSI6ImJvb2xlYW5pemUuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiYm9vbGVhbml6ZVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiYm9vbGVhbml6ZS9ib29sZWFuaXplLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJib29sZWFuaXplLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImJvb2xlYW5pemVcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2Jvb2xlYW5pemUuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJib29sZWFuaXplLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RXZhbHVhdGUgc3RyaW5nIGlmIFwidHJ1ZVwiIG9yIFwiZmFsc2VcIi5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwidHJ1bHlcIjogXCJ0cnVseVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XG5cbnZhciBib29sZWFuaXplID0gZnVuY3Rpb24gYm9vbGVhbml6ZSggZW50aXR5ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwiYm9vbGVhblwiLFxuXHRcdFx0XHRcdFwiKlwiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCB0eXBlb2YgZW50aXR5ID09IFwic3RyaW5nXCIgKXtcblx0XHRpZiggZW50aXR5LnRvTG93ZXJDYXNlKCApID09IFwidHJ1ZVwiICl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiggZW50aXR5LnRvTG93ZXJDYXNlKCApID09IFwiZmFsc2VcIiApe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdGlmKCB0eXBlb2YgZW50aXR5ID09IFwiYm9vbGVhblwiICl7XG5cdFx0cmV0dXJuIGVudGl0eTtcblx0fVxuXG5cdHJldHVybiB0cnVseSggZW50aXR5ICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJvb2xlYW5pemU7XG4iXX0=
//# sourceMappingURL=booleanize.support.js.map
