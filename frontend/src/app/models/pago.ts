export interface Ipago {
    id_pagos?:number;
    id_socio:number;
    fecha_pago:Date;
    cuota:number;
    periodo_mes:string;
    periodo_anio:number
}