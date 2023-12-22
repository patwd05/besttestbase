var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_BPS_Schools_SY2324_1 = new ol.format.GeoJSON();
var features_BPS_Schools_SY2324_1 = format_BPS_Schools_SY2324_1.readFeatures(json_BPS_Schools_SY2324_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BPS_Schools_SY2324_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BPS_Schools_SY2324_1.addFeatures(features_BPS_Schools_SY2324_1);cluster_BPS_Schools_SY2324_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_BPS_Schools_SY2324_1
});
var lyr_BPS_Schools_SY2324_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_BPS_Schools_SY2324_1, 
                style: style_BPS_Schools_SY2324_1,
                interactive: true,
                title: '<img src="styles/legend/BPS_Schools_SY2324_1.png" /> BPS_Schools_SY2324'
            });

lyr_Positronretina_0.setVisible(true);lyr_BPS_Schools_SY2324_1.setVisible(true);
var layersList = [lyr_Positronretina_0,lyr_BPS_Schools_SY2324_1];
lyr_BPS_Schools_SY2324_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'ADDRESS': 'ADDRESS', 'ZIPCODE': 'ZIPCODE', 'SCH_ID': 'SCH_ID', 'SCH_NAME': 'SCH_NAME', 'SCH_LABEL': 'SCH_LABEL', 'SCH_TYPE': 'SCH_TYPE', 'NBHD': 'NBHD', 'Cluster': 'Cluster', 'schcode_new': 'schcode_new', 'schcode_text': 'schcode_text', });
lyr_BPS_Schools_SY2324_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'ADDRESS': 'TextEdit', 'ZIPCODE': 'TextEdit', 'SCH_ID': 'TextEdit', 'SCH_NAME': 'TextEdit', 'SCH_LABEL': 'TextEdit', 'SCH_TYPE': 'TextEdit', 'NBHD': 'TextEdit', 'Cluster': 'TextEdit', 'schcode_new': 'TextEdit', 'schcode_text': 'TextEdit', });
lyr_BPS_Schools_SY2324_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'ADDRESS': 'no label', 'ZIPCODE': 'no label', 'SCH_ID': 'no label', 'SCH_NAME': 'no label', 'SCH_LABEL': 'no label', 'SCH_TYPE': 'no label', 'NBHD': 'no label', 'Cluster': 'no label', 'schcode_new': 'no label', 'schcode_text': 'no label', });
lyr_BPS_Schools_SY2324_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});