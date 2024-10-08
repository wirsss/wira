ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([672373.946152, 9111289.805143, 694423.180639, 9124816.942865]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_bataskecamatan_1 = new ol.format.GeoJSON();
var features_bataskecamatan_1 = format_bataskecamatan_1.readFeatures(json_bataskecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_bataskecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bataskecamatan_1.addFeatures(features_bataskecamatan_1);
var lyr_bataskecamatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bataskecamatan_1, 
                style: style_bataskecamatan_1,
                popuplayertitle: "bataskecamatan",
                interactive: true,
                title: '<img src="styles/legend/bataskecamatan_1.png" /> bataskecamatan'
            });
var format_Export_2 = new ol.format.GeoJSON();
var features_Export_2 = format_Export_2.readFeatures(json_Export_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Export_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_2.addFeatures(features_Export_2);
var lyr_Export_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Export_2, 
                style: style_Export_2,
                popuplayertitle: "Export",
                interactive: true,
                title: '<img src="styles/legend/Export_2.png" /> Export'
            });
var format_Jalan_3 = new ol.format.GeoJSON();
var features_Jalan_3 = format_Jalan_3.readFeatures(json_Jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_3.addFeatures(features_Jalan_3);
var lyr_Jalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_3, 
                style: style_Jalan_3,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/Jalan_3.png" /> Jalan'
            });
var format_point_4 = new ol.format.GeoJSON();
var features_point_4 = format_point_4.readFeatures(json_point_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_point_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_4.addFeatures(features_point_4);
var lyr_point_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_4, 
                style: style_point_4,
                popuplayertitle: "point",
                interactive: true,
                title: '<img src="styles/legend/point_4.png" /> point'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_bataskecamatan_1.setVisible(true);lyr_Export_2.setVisible(true);lyr_Jalan_3.setVisible(true);lyr_point_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_bataskecamatan_1,lyr_Export_2,lyr_Jalan_3,lyr_point_4];
lyr_bataskecamatan_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luasan_Ha': 'Luasan_Ha', 'Nilai': 'Nilai', 'bobot_kp': 'bobot_kp', 'tb_kp': 'tb_kp', 'jumlah_SM': 'jumlah_SM', 'nilai_sm': 'nilai_sm', 'bobot_sm': 'bobot_sm', 'tb_sm': 'tb_sm', 'total': 'total', 'kelas': 'kelas', 'NAMA1': 'NAMA1', 'ID': 'ID', 'Lembar': 'Lembar', 'Skala': 'Skala', 'HEHEHEHE': 'HEHEHEHE', 'FID_1': 'FID_1', 'LUASAR': 'LUASAR', 'JMLHPEN': 'JMLHPEN', 'KPDTNPEN': 'KPDTNPEN', });
lyr_Export_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luasan_Ha': 'Luasan_Ha', 'Nilai': 'Nilai', 'bobot_kp': 'bobot_kp', 'tb_kp': 'tb_kp', 'jumlah_SM': 'jumlah_SM', 'nilai_sm': 'nilai_sm', 'bobot_sm': 'bobot_sm', 'tb_sm': 'tb_sm', 'total': 'total', 'kelas': 'kelas', 'NAMA1': 'NAMA1', 'ID': 'ID', 'Lembar': 'Lembar', 'Skala': 'Skala', 'HEHEHEHE': 'HEHEHEHE', });
lyr_Jalan_3.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_point_4.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Nama': 'Nama', 'Jalan': 'Jalan', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', 'Kota': 'Kota', 'Provinsi_k': 'Provinsi_k', });
lyr_bataskecamatan_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luasan_Ha': 'TextEdit', 'Nilai': 'TextEdit', 'bobot_kp': 'TextEdit', 'tb_kp': 'TextEdit', 'jumlah_SM': 'TextEdit', 'nilai_sm': 'TextEdit', 'bobot_sm': 'TextEdit', 'tb_sm': 'TextEdit', 'total': 'TextEdit', 'kelas': 'TextEdit', 'NAMA1': 'TextEdit', 'ID': 'TextEdit', 'Lembar': 'TextEdit', 'Skala': 'TextEdit', 'HEHEHEHE': 'TextEdit', 'FID_1': 'TextEdit', 'LUASAR': 'TextEdit', 'JMLHPEN': 'TextEdit', 'KPDTNPEN': 'TextEdit', });
lyr_Export_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luasan_Ha': 'TextEdit', 'Nilai': 'TextEdit', 'bobot_kp': 'TextEdit', 'tb_kp': 'TextEdit', 'jumlah_SM': 'TextEdit', 'nilai_sm': 'TextEdit', 'bobot_sm': 'TextEdit', 'tb_sm': 'TextEdit', 'total': 'TextEdit', 'kelas': 'TextEdit', 'NAMA1': 'TextEdit', 'ID': 'TextEdit', 'Lembar': 'TextEdit', 'Skala': 'TextEdit', 'HEHEHEHE': 'TextEdit', });
lyr_Jalan_3.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_point_4.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Nama': 'TextEdit', 'Jalan': 'TextEdit', 'Kelurahan': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kota': 'TextEdit', 'Provinsi_k': 'TextEdit', });
lyr_bataskecamatan_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKC': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Luasan_Ha': 'no label', 'Nilai': 'no label', 'bobot_kp': 'no label', 'tb_kp': 'no label', 'jumlah_SM': 'no label', 'nilai_sm': 'no label', 'bobot_sm': 'no label', 'tb_sm': 'no label', 'total': 'no label', 'kelas': 'no label', 'NAMA1': 'no label', 'ID': 'no label', 'Lembar': 'no label', 'Skala': 'no label', 'HEHEHEHE': 'no label', 'FID_1': 'no label', 'LUASAR': 'no label', 'JMLHPEN': 'no label', 'KPDTNPEN': 'no label', });
lyr_Export_2.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKC': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Luasan_Ha': 'no label', 'Nilai': 'no label', 'bobot_kp': 'no label', 'tb_kp': 'no label', 'jumlah_SM': 'no label', 'nilai_sm': 'no label', 'bobot_sm': 'no label', 'tb_sm': 'no label', 'total': 'no label', 'kelas': 'no label', 'NAMA1': 'no label', 'ID': 'no label', 'Lembar': 'no label', 'Skala': 'no label', 'HEHEHEHE': 'no label', });
lyr_Jalan_3.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_point_4.set('fieldLabels', {'X': 'no label', 'Y': 'no label', 'Nama': 'header label - always visible', 'Jalan': 'header label - visible with data', 'Kelurahan': 'header label - always visible', 'Kecamatan': 'header label - always visible', 'Kota': 'header label - always visible', 'Provinsi_k': 'header label - always visible', });
lyr_point_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});