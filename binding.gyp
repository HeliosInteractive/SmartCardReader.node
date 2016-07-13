{
  "targets": [
    {
      "target_name": "SmartCardReader",
      "sources": [
        "include/SmartCardReader.hh",
        "source/SmartCardReader.cc",
        "source/SmartCardWrapper.cc",
        "source/SmartCardModule.cc"
      ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")",
		"include"
      ]
    }
  ]
}