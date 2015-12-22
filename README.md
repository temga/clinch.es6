# clinch.es6
This is external addon for [clinch](https://github.com/Meettya/clinch) - CommonJS to browser packer to support ```.js``` files with ES2015 specification.

## How to use

    import Clinch from 'clinch';
    import { clinch_es6 } from 'clinch.es6';
    
    //create packer object
    let packer = new Clinch({
      runtime : true
    });
    
    //add plugin
    packer.addPlugin(clinch_es6);

For more information see main module documentation.