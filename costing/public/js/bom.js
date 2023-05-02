frappe.ui.form.on("BOM", "onload", function(frm, cdt, cdn) {
    if(frm.doc.item){
        var totalb = 0;
        var totald = 0;
        $.each(frm.doc.costing_detail || [], function(i, d) {
        if(d.part)  {
                d.area=((d.length*d.breadth) *d.nos);
                totalb += flt(d.area);            
                totald += flt(d.area)/144;
                }
               
            });
            frm.set_value("total_a", totalb);
            frm.set_value("total_area", totald);
        }

refresh_field("costing_detail");
});

frappe.ui.form.on("BOM", "validate", function(frm, cdt, cdn) {
    if(frm.doc.item){
var totalb = 0;
var totald = 0;
$.each(frm.doc.costing_detail || [], function(i, d) {
if(d.part)  {
        d.area=((d.length*d.breadth) *d.nos);
        totalb += flt(d.area);            
        totald += flt(d.area)/144;
        }
       
    });
    frm.set_value("total_a", totalb);
    frm.set_value("total_area", totald);
}

refresh_field("costing_detail");
});


frappe.ui.form.on("BOM", "wastage", function(frm, cdt, cdn) {
    if(frm.doc.wastage){
        frm.set_value("total_wastage", (frm.doc.total_area*(frm.doc.wastage)/100));
        frm.set_value("total_lether",frm.doc.total_wastage + frm.doc.total_area );
        }

refresh_field("costing_detail");
});
