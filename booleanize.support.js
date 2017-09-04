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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2xlYW5pemUuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJ0cnVseSIsInJlcXVpcmUiLCJib29sZWFuaXplIiwiZW50aXR5IiwidG9Mb3dlckNhc2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9EQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFJQyxhQUFhLFNBQVNBLFVBQVQsQ0FBcUJDLE1BQXJCLEVBQTZCO0FBQzdDOzs7Ozs7Ozs7Ozs7QUFZQSxLQUFJLE9BQU9BLE1BQVAsSUFBaUIsUUFBckIsRUFBK0I7QUFDOUIsTUFBSUEsT0FBT0MsV0FBUCxNQUF5QixNQUE3QixFQUFxQztBQUNwQyxVQUFPLElBQVA7QUFDQTs7QUFFRCxNQUFJRCxPQUFPQyxXQUFQLE1BQXlCLE9BQTdCLEVBQXNDO0FBQ3JDLFVBQU8sS0FBUDtBQUNBO0FBQ0Q7O0FBRUQsS0FBSSxPQUFPRCxNQUFQLElBQWlCLFNBQXJCLEVBQWdDO0FBQy9CLFNBQU9BLE1BQVA7QUFDQTs7QUFFRCxRQUFPSCxNQUFPRyxNQUFQLENBQVA7QUFDQSxDQTVCRDs7QUE4QkFFLE9BQU9DLE9BQVAsR0FBaUJKLFVBQWpCIiwiZmlsZSI6ImJvb2xlYW5pemUuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJib29sZWFuaXplXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImJvb2xlYW5pemUvYm9vbGVhbml6ZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJib29sZWFuaXplLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwiYm9vbGVhbml6ZVwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvYm9vbGVhbml6ZS5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwiYm9vbGVhbml6ZS10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdEV2YWx1YXRlIHN0cmluZyBpZiBcInRydWVcIiBvciBcImZhbHNlXCIuXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XHJcblxyXG52YXIgYm9vbGVhbml6ZSA9IGZ1bmN0aW9uIGJvb2xlYW5pemUoIGVudGl0eSApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFtcclxuXHRcdFx0XHRcdFwic3RyaW5nXCIsXHJcblx0XHRcdFx0XHRcImJvb2xlYW5cIixcclxuXHRcdFx0XHRcdFwiKlwiXHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCB0eXBlb2YgZW50aXR5ID09IFwic3RyaW5nXCIgKXtcclxuXHRcdGlmKCBlbnRpdHkudG9Mb3dlckNhc2UoICkgPT0gXCJ0cnVlXCIgKXtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoIGVudGl0eS50b0xvd2VyQ2FzZSggKSA9PSBcImZhbHNlXCIgKXtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWYoIHR5cGVvZiBlbnRpdHkgPT0gXCJib29sZWFuXCIgKXtcclxuXHRcdHJldHVybiBlbnRpdHk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1bHkoIGVudGl0eSApO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBib29sZWFuaXplO1xyXG4iXX0=
//# sourceMappingURL=booleanize.support.js.map
