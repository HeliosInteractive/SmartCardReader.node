{
  "targets": [
    {
      "target_name": "SmartCardReader",
      "sources": [
        "include/SmartCardReader.hh",
        "source/SmartCardReader.cc",
        "include/SmartCardWrapper.hh",
        "source/SmartCardWrapper.cc",
        "source/SmartCardModule.cc"
      ],
	  "libraries" : [
	    "Winscard.lib"
	  ],
	  "defines": [
	    "WIN32_LEAN_AND_MEAN",
		"VC_EXTRALEAN",
		"NOMINMAX"
	  ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")",
		"include"
      ]
    }
  ]
}