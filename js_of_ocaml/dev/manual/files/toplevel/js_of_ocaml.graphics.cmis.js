// Generated by js_of_ocaml 2.8.2
(function(a)
   {"use strict";
    function b(c,b)
     {if(a.caml_fs_register)
       a.caml_fs_register(c,b);
      else
       {if(!a.caml_fs_tmp)a.caml_fs_tmp = [];
        a.caml_fs_tmp.push({name:c,content:b})}
      return 0}
    b
     ("/cmis/graphics_js.cmi",
      "Caml1999I017\x84\x95\xa6\xbe\0\0\x1e*\0\0\x05\xe0\0\0\x15\xa4\0\0\x14\xfb\xa0+Graphics_js\xa0\xb2\xb0\x01\x04K/Graphic_failure@\xf0\x90\xb0G#exn@@\xa0\xb0\xb3\x90\xb0C&string@@\x90@\x02\x05\xf5\xe1\0\0\xfe@@A\xb0\xc0&_none_A@\0\xff\x04\x02A@B\xa0\xa0\xb0\x01\x04L+close_graph@\xc0\xb0\xc1 \xb0\xb3\x90\xb0F$unit@@\x90@\x02\x05\xf5\xe1\0\0\xfb\xb0\xb3\x04\x06@\x90@\x02\x05\xf5\xe1\0\0\xfc@\x02\x05\xf5\xe1\0\0\xfd@\x04\x14@\xa0\xa0\xb0\x01\x04M0set_window_title@\xc0\xb0\xc1\x04\x11\xb0\xb3\x04!@\x90@\x02\x05\xf5\xe1\0\0\xf8\xb0\xb3\x04\x13@\x90@\x02\x05\xf5\xe1\0\0\xf9@\x02\x05\xf5\xe1\0\0\xfa@\x04!@\xa0\xa0\xb0\x01\x04N-resize_window@\xc0\xb0\xc1\x04\x1e\xb0\xb3\x90\xb0A#int@@\x90@\x02\x05\xf5\xe1\0\0\xf3\xb0\xc1\x04&\xb0\xb3\x04\b@\x90@\x02\x05\xf5\xe1\0\0\xf4\xb0\xb3\x04(@\x90@\x02\x05\xf5\xe1\0\0\xf5@\x02\x05\xf5\xe1\0\0\xf6@\x02\x05\xf5\xe1\0\0\xf7@\x046@\xa0\xa0\xb0\x01\x04O+clear_graph@\xc0\xb0\xc1\x043\xb0\xb3\x042@\x90@\x02\x05\xf5\xe1\0\0\xf0\xb0\xb3\x045@\x90@\x02\x05\xf5\xe1\0\0\xf1@\x02\x05\xf5\xe1\0\0\xf2\x90\xd03caml_gr_clear_graphAA @\x04G@\xa0\xa0\xb0\x01\x04P&size_x@\xc0\xb0\xc1\x04D\xb0\xb3\x04C@\x90@\x02\x05\xf5\xe1\0\0\xed\xb0\xb3\x04)@\x90@\x02\x05\xf5\xe1\0\0\xee@\x02\x05\xf5\xe1\0\0\xef\x90\xd0.caml_gr_size_xAA\x04\x11@\x04W@\xa0\xa0\xb0\x01\x04Q&size_y@\xc0\xb0\xc1\x04T\xb0\xb3\x04S@\x90@\x02\x05\xf5\xe1\0\0\xea\xb0\xb3\x049@\x90@\x02\x05\xf5\xe1\0\0\xeb@\x02\x05\xf5\xe1\0\0\xec\x90\xd0.caml_gr_size_yAA\x04!@\x04g@\xa0\xb1\xb0\x01\x04R%color@\b\0\0$\0@@@A\x90\xb0\xb3\x04E@\x90@\x02\x05\xf5\xe1\0\0\xe9@@\x04p@A\xa0\xa0\xb0\x01\x04S#rgb@\xc0\xb0\xc1\x04m\xb0\xb3\x04O@\x90@\x02\x05\xf5\xe1\0\0\xe2\xb0\xc1\x04r\xb0\xb3\x04T@\x90@\x02\x05\xf5\xe1\0\0\xe3\xb0\xc1\x04w\xb0\xb3\x04Y@\x90@\x02\x05\xf5\xe1\0\0\xe4\xb0\xb3\x90\x04\x1e@\x90@\x02\x05\xf5\xe1\0\0\xe5@\x02\x05\xf5\xe1\0\0\xe6@\x02\x05\xf5\xe1\0\0\xe7@\x02\x05\xf5\xe1\0\0\xe8@\x04\x88@\xa0\xa0\xb0\x01\x04T)set_color@\xc0\xb0\xc1\x04\x85\xb0\xb3\x04\x0b@\x90@\x02\x05\xf5\xe1\0\0\xdf\xb0\xb3\x04\x87@\x90@\x02\x05\xf5\xe1\0\0\xe0@\x02\x05\xf5\xe1\0\0\xe1\x90\xd01caml_gr_set_colorAA\x04R@\x04\x98@\xa0\xa0\xb0\x01\x04U*background@\xc0\xb0\xb3\x04\x19@\x90@\x02\x05\xf5\xe1\0\0\xde@\x04\xa0@\xa0\xa0\xb0\x01\x04V*foreground@\xc0\xb0\xb3\x04!@\x90@\x02\x05\xf5\xe1\0\0\xdd@\x04\xa8@\xa0\xa0\xb0\x01\x04W%black@\xc0\xb0\xb3\x04)@\x90@\x02\x05\xf5\xe1\0\0\xdc@\x04\xb0@\xa0\xa0\xb0\x01\x04X%white@\xc0\xb0\xb3\x041@\x90@\x02\x05\xf5\xe1\0\0\xdb@\x04\xb8@\xa0\xa0\xb0\x01\x04Y#red@\xc0\xb0\xb3\x049@\x90@\x02\x05\xf5\xe1\0\0\xda@\x04\xc0@\xa0\xa0\xb0\x01\x04Z%green@\xc0\xb0\xb3\x04A@\x90@\x02\x05\xf5\xe1\0\0\xd9@\x04\xc8@\xa0\xa0\xb0\x01\x04[$blue@\xc0\xb0\xb3\x04I@\x90@\x02\x05\xf5\xe1\0\0\xd8@\x04\xd0@\xa0\xa0\xb0\x01\x04\\&yellow@\xc0\xb0\xb3\x04Q@\x90@\x02\x05\xf5\xe1\0\0\xd7@\x04\xd8@\xa0\xa0\xb0\x01\x04]$cyan@\xc0\xb0\xb3\x04Y@\x90@\x02\x05\xf5\xe1\0\0\xd6@\x04\xe0@\xa0\xa0\xb0\x01\x04^'magenta@\xc0\xb0\xb3\x04a@\x90@\x02\x05\xf5\xe1\0\0\xd5@\x04\xe8@\xa0\xa0\xb0\x01\x04_$plot@\xc0\xb0\xc1\x04\xe5\xb0\xb3\x04\xc7@\x90@\x02\x05\xf5\xe1\0\0\xd0\xb0\xc1\x04\xea\xb0\xb3\x04\xcc@\x90@\x02\x05\xf5\xe1\0\0\xd1\xb0\xb3\x04\xec@\x90@\x02\x05\xf5\xe1\0\0\xd2@\x02\x05\xf5\xe1\0\0\xd3@\x02\x05\xf5\xe1\0\0\xd4\x90\xd0,caml_gr_plotBA\x04\xb7@\x04\xfd@\xa0\xa0\xb0\x01\x04`%plots@\xc0\xb0\xc1\x04\xfa\xb0\xb3\x90\xb0H%array@\xa0\xb0\x92\xa0\xb0\xb3\x04\xe5@\x90@\x02\x05\xf5\xe1\0\0\xcb\xa0\xb0\xb3\x04\xe9@\x90@\x02\x05\xf5\xe1\0\0\xca@\x02\x05\xf5\xe1\0\0\xcc@\x90@\x02\x05\xf5\xe1\0\0\xcd\xb0\xb3\x05\x01\n@\x90@\x02\x05\xf5\xe1\0\0\xce@\x02\x05\xf5\xe1\0\0\xcf@\x05\x01\x18@\xa0\xa0\xb0\x01\x04a+point_color@\xc0\xb0\xc1\x05\x01\x15\xb0\xb3\x04\xf7@\x90@\x02\x05\xf5\xe1\0\0\xc5\xb0\xc1\x05\x01\x1a\xb0\xb3\x04\xfc@\x90@\x02\x05\xf5\xe1\0\0\xc6\xb0\xb3\x04\xa3@\x90@\x02\x05\xf5\xe1\0\0\xc7@\x02\x05\xf5\xe1\0\0\xc8@\x02\x05\xf5\xe1\0\0\xc9\x90\xd03caml_gr_point_colorBA\x04\xe7@\x05\x01-@\xa0\xa0\xb0\x01\x04b&moveto@\xc0\xb0\xc1\x05\x01*\xb0\xb3\x05\x01\f@\x90@\x02\x05\xf5\xe1\0\0\xc0\xb0\xc1\x05\x01/\xb0\xb3\x05\x01\x11@\x90@\x02\x05\xf5\xe1\0\0\xc1\xb0\xb3\x05\x011@\x90@\x02\x05\xf5\xe1\0\0\xc2@\x02\x05\xf5\xe1\0\0\xc3@\x02\x05\xf5\xe1\0\0\xc4\x90\xd0.caml_gr_movetoBA\x04\xfc@\x05\x01B@\xa0\xa0\xb0\x01\x04c'rmoveto@\xc0\xb0\xc1\x05\x01?\xb0\xb3\x05\x01!@\x90@\x02\x05\xf5\xe1\0\0\xbb\xb0\xc1\x05\x01D\xb0\xb3\x05\x01&@\x90@\x02\x05\xf5\xe1\0\0\xbc\xb0\xb3\x05\x01F@\x90@\x02\x05\xf5\xe1\0\0\xbd@\x02\x05\xf5\xe1\0\0\xbe@\x02\x05\xf5\xe1\0\0\xbf@\x05\x01T@\xa0\xa0\xb0\x01\x04d)current_x@\xc0\xb0\xc1\x05\x01Q\xb0\xb3\x05\x01P@\x90@\x02\x05\xf5\xe1\0\0\xb8\xb0\xb3\x05\x016@\x90@\x02\x05\xf5\xe1\0\0\xb9@\x02\x05\xf5\xe1\0\0\xba\x90\xd01caml_gr_current_xAA\x05\x01\x1e@\x05\x01d@\xa0\xa0\xb0\x01\x04e)current_y@\xc0\xb0\xc1\x05\x01a\xb0\xb3\x05\x01`@\x90@\x02\x05\xf5\xe1\0\0\xb5\xb0\xb3\x05\x01F@\x90@\x02\x05\xf5\xe1\0\0\xb6@\x02\x05\xf5\xe1\0\0\xb7\x90\xd01caml_gr_current_yAA\x05\x01.@\x05\x01t@\xa0\xa0\xb0\x01\x04f-current_point@\xc0\xb0\xc1\x05\x01q\xb0\xb3\x05\x01p@\x90@\x02\x05\xf5\xe1\0\0\xb0\xb0\x92\xa0\xb0\xb3\x05\x01Y@\x90@\x02\x05\xf5\xe1\0\0\xb2\xa0\xb0\xb3\x05\x01]@\x90@\x02\x05\xf5\xe1\0\0\xb1@\x02\x05\xf5\xe1\0\0\xb3@\x02\x05\xf5\xe1\0\0\xb4@\x05\x01\x88@\xa0\xa0\xb0\x01\x04g&lineto@\xc0\xb0\xc1\x05\x01\x85\xb0\xb3\x05\x01g@\x90@\x02\x05\xf5\xe1\0\0\xab\xb0\xc1\x05\x01\x8a\xb0\xb3\x05\x01l@\x90@\x02\x05\xf5\xe1\0\0\xac\xb0\xb3\x05\x01\x8c@\x90@\x02\x05\xf5\xe1\0\0\xad@\x02\x05\xf5\xe1\0\0\xae@\x02\x05\xf5\xe1\0\0\xaf\x90\xd0.caml_gr_linetoBA\x05\x01W@\x05\x01\x9d@\xa0\xa0\xb0\x01\x04h'rlineto@\xc0\xb0\xc1\x05\x01\x9a\xb0\xb3\x05\x01|@\x90@\x02\x05\xf5\xe1\0\0\xa6\xb0\xc1\x05\x01\x9f\xb0\xb3\x05\x01\x81@\x90@\x02\x05\xf5\xe1\0\0\xa7\xb0\xb3\x05\x01\xa1@\x90@\x02\x05\xf5\xe1\0\0\xa8@\x02\x05\xf5\xe1\0\0\xa9@\x02\x05\xf5\xe1\0\0\xaa@\x05\x01\xaf@\xa0\xa0\xb0\x01\x04i'curveto@\xc0\xb0\xc1\x05\x01\xac\xb0\x92\xa0\xb0\xb3\x05\x01\x91@\x90@\x02\x05\xf5\xe1\0\0\x9a\xa0\xb0\xb3\x05\x01\x95@\x90@\x02\x05\xf5\xe1\0\0\x99@\x02\x05\xf5\xe1\0\0\x9b\xb0\xc1\x05\x01\xb8\xb0\x92\xa0\xb0\xb3\x05\x01\x9d@\x90@\x02\x05\xf5\xe1\0\0\x9d\xa0\xb0\xb3\x05\x01\xa1@\x90@\x02\x05\xf5\xe1\0\0\x9c@\x02\x05\xf5\xe1\0\0\x9e\xb0\xc1\x05\x01\xc4\xb0\x92\xa0\xb0\xb3\x05\x01\xa9@\x90@\x02\x05\xf5\xe1\0\0\xa0\xa0\xb0\xb3\x05\x01\xad@\x90@\x02\x05\xf5\xe1\0\0\x9f@\x02\x05\xf5\xe1\0\0\xa1\xb0\xb3\x05\x01\xcd@\x90@\x02\x05\xf5\xe1\0\0\xa2@\x02\x05\xf5\xe1\0\0\xa3@\x02\x05\xf5\xe1\0\0\xa4@\x02\x05\xf5\xe1\0\0\xa5@\x05\x01\xdb@\xa0\xa0\xb0\x01\x04j)draw_rect@\xc0\xb0\xc1\x05\x01\xd8\xb0\xb3\x05\x01\xba@\x90@\x02\x05\xf5\xe1\0\0\x90\xb0\xc1\x05\x01\xdd\xb0\xb3\x05\x01\xbf@\x90@\x02\x05\xf5\xe1\0\0\x91\xb0\xc1\x05\x01\xe2\xb0\xb3\x05\x01\xc4@\x90@\x02\x05\xf5\xe1\0\0\x92\xb0\xc1\x05\x01\xe7\xb0\xb3\x05\x01\xc9@\x90@\x02\x05\xf5\xe1\0\0\x93\xb0\xb3\x05\x01\xe9@\x90@\x02\x05\xf5\xe1\0\0\x94@\x02\x05\xf5\xe1\0\0\x95@\x02\x05\xf5\xe1\0\0\x96@\x02\x05\xf5\xe1\0\0\x97@\x02\x05\xf5\xe1\0\0\x98@\x05\x01\xf7@\xa0\xa0\xb0\x01\x04k.draw_poly_line@\xc0\xb0\xc1\x05\x01\xf4\xb0\xb3\x04\xfa\xa0\xb0\x92\xa0\xb0\xb3\x05\x01\xdc@\x90@\x02\x05\xf5\xe1\0\0\x8b\xa0\xb0\xb3\x05\x01\xe0@\x90@\x02\x05\xf5\xe1\0\0\x8a@\x02\x05\xf5\xe1\0\0\x8c@\x90@\x02\x05\xf5\xe1\0\0\x8d\xb0\xb3\x05\x02\x01@\x90@\x02\x05\xf5\xe1\0\0\x8e@\x02\x05\xf5\xe1\0\0\x8f@\x05\x02\x0f@\xa0\xa0\xb0\x01\x04l)draw_poly@\xc0\xb0\xc1\x05\x02\f\xb0\xb3\x05\x01\x12\xa0\xb0\x92\xa0\xb0\xb3\x05\x01\xf4@\x90@\x02\x05\xf5\xe1\0\0\x85\xa0\xb0\xb3\x05\x01\xf8@\x90@\x02\x05\xf5\xe1\0\0\x84@\x02\x05\xf5\xe1\0\0\x86@\x90@\x02\x05\xf5\xe1\0\0\x87\xb0\xb3\x05\x02\x19@\x90@\x02\x05\xf5\xe1\0\0\x88@\x02\x05\xf5\xe1\0\0\x89@\x05\x02'@\xa0\xa0\xb0\x01\x04m-draw_segments@\xc0\xb0\xc1\x05\x02$\xb0\xb3\x05\x01*\xa0\xb0\x92\xa0\xb0\xb3\x05\x02\f@\x90@\x02\x05\xf5\xe1\0\x01\xff\x7f\xa0\xb0\xb3\x05\x02\x10@\x90@\x02\x05\xf5\xe1\0\x01\xff~\xa0\xb0\xb3\x05\x02\x14@\x90@\x02\x05\xf5\xe1\0\x01\xff}\xa0\xb0\xb3\x05\x02\x18@\x90@\x02\x05\xf5\xe1\0\x01\xff|@\x02\x05\xf5\xe1\0\0\x80@\x90@\x02\x05\xf5\xe1\0\0\x81\xb0\xb3\x05\x029@\x90@\x02\x05\xf5\xe1\0\0\x82@\x02\x05\xf5\xe1\0\0\x83@\x05\x02G@\xa0\xa0\xb0\x01\x04n(draw_arc@\xc0\xb0\xc1\x05\x02D\xb0\xb3\x05\x02&@\x90@\x02\x05\xf5\xe1\0\x01\xffo\xb0\xc1\x05\x02I\xb0\xb3\x05\x02+@\x90@\x02\x05\xf5\xe1\0\x01\xffp\xb0\xc1\x05\x02N\xb0\xb3\x05\x020@\x90@\x02\x05\xf5\xe1\0\x01\xffq\xb0\xc1\x05\x02S\xb0\xb3\x05\x025@\x90@\x02\x05\xf5\xe1\0\x01\xffr\xb0\xc1\x05\x02X\xb0\xb3\x05\x02:@\x90@\x02\x05\xf5\xe1\0\x01\xffs\xb0\xc1\x05\x02]\xb0\xb3\x05\x02?@\x90@\x02\x05\xf5\xe1\0\x01\xfft\xb0\xb3\x05\x02_@\x90@\x02\x05\xf5\xe1\0\x01\xffu@\x02\x05\xf5\xe1\0\x01\xffv@\x02\x05\xf5\xe1\0\x01\xffw@\x02\x05\xf5\xe1\0\x01\xffx@\x02\x05\xf5\xe1\0\x01\xffy@\x02\x05\xf5\xe1\0\x01\xffz@\x02\x05\xf5\xe1\0\x01\xff{@\x05\x02m@\xa0\xa0\xb0\x01\x04o,draw_ellipse@\xc0\xb0\xc1\x05\x02j\xb0\xb3\x05\x02L@\x90@\x02\x05\xf5\xe1\0\x01\xfff\xb0\xc1\x05\x02o\xb0\xb3\x05\x02Q@\x90@\x02\x05\xf5\xe1\0\x01\xffg\xb0\xc1\x05\x02t\xb0\xb3\x05\x02V@\x90@\x02\x05\xf5\xe1\0\x01\xffh\xb0\xc1\x05\x02y\xb0\xb3\x05\x02[@\x90@\x02\x05\xf5\xe1\0\x01\xffi\xb0\xb3\x05\x02{@\x90@\x02\x05\xf5\xe1\0\x01\xffj@\x02\x05\xf5\xe1\0\x01\xffk@\x02\x05\xf5\xe1\0\x01\xffl@\x02\x05\xf5\xe1\0\x01\xffm@\x02\x05\xf5\xe1\0\x01\xffn@\x05\x02\x89@\xa0\xa0\xb0\x01\x04p+draw_circle@\xc0\xb0\xc1\x05\x02\x86\xb0\xb3\x05\x02h@\x90@\x02\x05\xf5\xe1\0\x01\xff_\xb0\xc1\x05\x02\x8b\xb0\xb3\x05\x02m@\x90@\x02\x05\xf5\xe1\0\x01\xff`\xb0\xc1\x05\x02\x90\xb0\xb3\x05\x02r@\x90@\x02\x05\xf5\xe1\0\x01\xffa\xb0\xb3\x05\x02\x92@\x90@\x02\x05\xf5\xe1\0\x01\xffb@\x02\x05\xf5\xe1\0\x01\xffc@\x02\x05\xf5\xe1\0\x01\xffd@\x02\x05\xf5\xe1\0\x01\xffe@\x05\x02\xa0@\xa0\xa0\xb0\x01\x04q.set_line_width@\xc0\xb0\xc1\x05\x02\x9d\xb0\xb3\x05\x02\x7f@\x90@\x02\x05\xf5\xe1\0\x01\xff\\\xb0\xb3\x05\x02\x9f@\x90@\x02\x05\xf5\xe1\0\x01\xff]@\x02\x05\xf5\xe1\0\x01\xff^@\x05\x02\xad@\xa0\xa0\xb0\x01\x04r)draw_char@\xc0\xb0\xc1\x05\x02\xaa\xb0\xb3\x90\xb0B$char@@\x90@\x02\x05\xf5\xe1\0\x01\xffY\xb0\xb3\x05\x02\xaf@\x90@\x02\x05\xf5\xe1\0\x01\xffZ@\x02\x05\xf5\xe1\0\x01\xff[\x90\xd01caml_gr_draw_charAA\x05\x02z@\x05\x02\xc0@\xa0\xa0\xb0\x01\x04s+draw_string@\xc0\xb0\xc1\x05\x02\xbd\xb0\xb3\x05\x02\xcd@\x90@\x02\x05\xf5\xe1\0\x01\xffV\xb0\xb3\x05\x02\xbf@\x90@\x02\x05\xf5\xe1\0\x01\xffW@\x02\x05\xf5\xe1\0\x01\xffX\x90\xd03caml_gr_draw_stringAA\x05\x02\x8a@\x05\x02\xd0@\xa0\xa0\xb0\x01\x04t(set_font@\xc0\xb0\xc1\x05\x02\xcd\xb0\xb3\x05\x02\xdd@\x90@\x02\x05\xf5\xe1\0\x01\xffS\xb0\xb3\x05\x02\xcf@\x90@\x02\x05\xf5\xe1\0\x01\xffT@\x02\x05\xf5\xe1\0\x01\xffU\x90\xd00caml_gr_set_fontAA\x05\x02\x9a@\x05\x02\xe0@\xa0\xa0\xb0\x01\x04u-set_text_size@\xc0\xb0\xc1\x05\x02\xdd\xb0\xb3\x05\x02\xbf@\x90@\x02\x05\xf5\xe1\0\x01\xffP\xb0\xb3\x05\x02\xdf@\x90@\x02\x05\xf5\xe1\0\x01\xffQ@\x02\x05\xf5\xe1\0\x01\xffR@\x05\x02\xed@\xa0\xa0\xb0\x01\x04v)text_size@\xc0\xb0\xc1\x05\x02\xea\xb0\xb3\x05\x02\xfa@\x90@\x02\x05\xf5\xe1\0\x01\xffK\xb0\x92\xa0\xb0\xb3\x05\x02\xd2@\x90@\x02\x05\xf5\xe1\0\x01\xffM\xa0\xb0\xb3\x05\x02\xd6@\x90@\x02\x05\xf5\xe1\0\x01\xffL@\x02\x05\xf5\xe1\0\x01\xffN@\x02\x05\xf5\xe1\0\x01\xffO\x90\xd01caml_gr_text_sizeAA\x05\x02\xbe@\x05\x03\x04@\xa0\xa0\xb0\x01\x04w)fill_rect@\xc0\xb0\xc1\x05\x03\x01\xb0\xb3\x05\x02\xe3@\x90@\x02\x05\xf5\xe1\0\x01\xffB\xb0\xc1\x05\x03\x06\xb0\xb3\x05\x02\xe8@\x90@\x02\x05\xf5\xe1\0\x01\xffC\xb0\xc1\x05\x03\x0b\xb0\xb3\x05\x02\xed@\x90@\x02\x05\xf5\xe1\0\x01\xffD\xb0\xc1\x05\x03\x10\xb0\xb3\x05\x02\xf2@\x90@\x02\x05\xf5\xe1\0\x01\xffE\xb0\xb3\x05\x03\x12@\x90@\x02\x05\xf5\xe1\0\x01\xffF@\x02\x05\xf5\xe1\0\x01\xffG@\x02\x05\xf5\xe1\0\x01\xffH@\x02\x05\xf5\xe1\0\x01\xffI@\x02\x05\xf5\xe1\0\x01\xffJ@\x05\x03 @\xa0\xa0\xb0\x01\x04x)fill_poly@\xc0\xb0\xc1\x05\x03\x1d\xb0\xb3\x05\x02#\xa0\xb0\x92\xa0\xb0\xb3\x05\x03\x05@\x90@\x02\x05\xf5\xe1\0\x01\xff=\xa0\xb0\xb3\x05\x03\t@\x90@\x02\x05\xf5\xe1\0\x01\xff<@\x02\x05\xf5\xe1\0\x01\xff>@\x90@\x02\x05\xf5\xe1\0\x01\xff?\xb0\xb3\x05\x03*@\x90@\x02\x05\xf5\xe1\0\x01\xff@@\x02\x05\xf5\xe1\0\x01\xffA\x90\xd01caml_gr_fill_polyAA\x05\x02\xf5@\x05\x03;@\xa0\xa0\xb0\x01\x04y(fill_arc@\xc0\xb0\xc1\x05\x038\xb0\xb3\x05\x03\x1a@\x90@\x02\x05\xf5\xe1\0\x01\xff/\xb0\xc1\x05\x03=\xb0\xb3\x05\x03\x1f@\x90@\x02\x05\xf5\xe1\0\x01\xff0\xb0\xc1\x05\x03B\xb0\xb3\x05\x03$@\x90@\x02\x05\xf5\xe1\0\x01\xff1\xb0\xc1\x05\x03G\xb0\xb3\x05\x03)@\x90@\x02\x05\xf5\xe1\0\x01\xff2\xb0\xc1\x05\x03L\xb0\xb3\x05\x03.@\x90@\x02\x05\xf5\xe1\0\x01\xff3\xb0\xc1\x05\x03Q\xb0\xb3\x05\x033@\x90@\x02\x05\xf5\xe1\0\x01\xff4\xb0\xb3\x05\x03S@\x90@\x02\x05\xf5\xe1\0\x01\xff5@\x02\x05\xf5\xe1\0\x01\xff6@\x02\x05\xf5\xe1\0\x01\xff7@\x02\x05\xf5\xe1\0\x01\xff8@\x02\x05\xf5\xe1\0\x01\xff9@\x02\x05\xf5\xe1\0\x01\xff:@\x02\x05\xf5\xe1\0\x01\xff;@\x05\x03a@\xa0\xa0\xb0\x01\x04z,fill_ellipse@\xc0\xb0\xc1\x05\x03^\xb0\xb3\x05\x03@@\x90@\x02\x05\xf5\xe1\0\x01\xff&\xb0\xc1\x05\x03c\xb0\xb3\x05\x03E@\x90@\x02\x05\xf5\xe1\0\x01\xff'\xb0\xc1\x05\x03h\xb0\xb3\x05\x03J@\x90@\x02\x05\xf5\xe1\0\x01\xff(\xb0\xc1\x05\x03m\xb0\xb3\x05\x03O@\x90@\x02\x05\xf5\xe1\0\x01\xff)\xb0\xb3\x05\x03o@\x90@\x02\x05\xf5\xe1\0\x01\xff*@\x02\x05\xf5\xe1\0\x01\xff+@\x02\x05\xf5\xe1\0\x01\xff,@\x02\x05\xf5\xe1\0\x01\xff-@\x02\x05\xf5\xe1\0\x01\xff.@\x05\x03}@\xa0\xa0\xb0\x01\x04{+fill_circle@\xc0\xb0\xc1\x05\x03z\xb0\xb3\x05\x03\\@\x90@\x02\x05\xf5\xe1\0\x01\xff\x1f\xb0\xc1\x05\x03\x7f\xb0\xb3\x05\x03a@\x90@\x02\x05\xf5\xe1\0\x01\xff \xb0\xc1\x05\x03\x84\xb0\xb3\x05\x03f@\x90@\x02\x05\xf5\xe1\0\x01\xff!\xb0\xb3\x05\x03\x86@\x90@\x02\x05\xf5\xe1\0\x01\xff\"@\x02\x05\xf5\xe1\0\x01\xff#@\x02\x05\xf5\xe1\0\x01\xff$@\x02\x05\xf5\xe1\0\x01\xff%@\x05\x03\x94@\xa0\xb1\xb0\x01\x04|%image@\b\0\0$\0@@@A@@@\x05\x03\x99@A\xa0\xa0\xb0\x01\x04}&transp@\xc0\xb0\xb3\x05\x03\x1a@\x90@\x02\x05\xf5\xe1\0\x01\xff\x1e@\x05\x03\xa1@\xa0\xa0\xb0\x01\x04~*make_image@\xc0\xb0\xc1\x05\x03\x9e\xb0\xb3\x05\x02\xa4\xa0\xb0\xb3\x05\x02\xa7\xa0\xb0\xb3\x05\x03*@\x90@\x02\x05\xf5\xe1\0\x01\xff\x19@\x90@\x02\x05\xf5\xe1\0\x01\xff\x1a@\x90@\x02\x05\xf5\xe1\0\x01\xff\x1b\xb0\xb3\x90\x04 @\x90@\x02\x05\xf5\xe1\0\x01\xff\x1c@\x02\x05\xf5\xe1\0\x01\xff\x1d\x90\xd02caml_gr_make_imageAA\x05\x03t@\x05\x03\xba@\xa0\xa0\xb0\x01\x04\x7f*dump_image@\xc0\xb0\xc1\x05\x03\xb7\xb0\xb3\x04\x0e@\x90@\x02\x05\xf5\xe1\0\x01\xff\x14\xb0\xb3\x05\x02\xc0\xa0\xb0\xb3\x05\x02\xc3\xa0\xb0\xb3\x05\x03F@\x90@\x02\x05\xf5\xe1\0\x01\xff\x15@\x90@\x02\x05\xf5\xe1\0\x01\xff\x16@\x90@\x02\x05\xf5\xe1\0\x01\xff\x17@\x02\x05\xf5\xe1\0\x01\xff\x18\x90\xd02caml_gr_dump_imageAA\x05\x03\x8c@\x05\x03\xd2@\xa0\xa0\xb0\x01\x04\x80*draw_image@\xc0\xb0\xc1\x05\x03\xcf\xb0\xb3\x04&@\x90@\x02\x05\xf5\xe1\0\x01\xff\r\xb0\xc1\x05\x03\xd4\xb0\xb3\x05\x03\xb6@\x90@\x02\x05\xf5\xe1\0\x01\xff\x0e\xb0\xc1\x05\x03\xd9\xb0\xb3\x05\x03\xbb@\x90@\x02\x05\xf5\xe1\0\x01\xff\x0f\xb0\xb3\x05\x03\xdb@\x90@\x02\x05\xf5\xe1\0\x01\xff\x10@\x02\x05\xf5\xe1\0\x01\xff\x11@\x02\x05\xf5\xe1\0\x01\xff\x12@\x02\x05\xf5\xe1\0\x01\xff\x13\x90\xd02caml_gr_draw_imageCA\x05\x03\xa6@\x05\x03\xec@\xa0\xa0\xb0\x01\x04\x81)get_image@\xc0\xb0\xc1\x05\x03\xe9\xb0\xb3\x05\x03\xcb@\x90@\x02\x05\xf5\xe1\0\x01\xff\x04\xb0\xc1\x05\x03\xee\xb0\xb3\x05\x03\xd0@\x90@\x02\x05\xf5\xe1\0\x01\xff\x05\xb0\xc1\x05\x03\xf3\xb0\xb3\x05\x03\xd5@\x90@\x02\x05\xf5\xe1\0\x01\xff\x06\xb0\xc1\x05\x03\xf8\xb0\xb3\x05\x03\xda@\x90@\x02\x05\xf5\xe1\0\x01\xff\x07\xb0\xb3\x04R@\x90@\x02\x05\xf5\xe1\0\x01\xff\b@\x02\x05\xf5\xe1\0\x01\xff\t@\x02\x05\xf5\xe1\0\x01\xff\n@\x02\x05\xf5\xe1\0\x01\xff\x0b@\x02\x05\xf5\xe1\0\x01\xff\f@\x05\x04\b@\xa0\xa0\xb0\x01\x04\x82,create_image@\xc0\xb0\xc1\x05\x04\x05\xb0\xb3\x05\x03\xe7@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xff\xb0\xc1\x05\x04\n\xb0\xb3\x05\x03\xec@\x90@\x02\x05\xf5\xe1\0\x01\xff\0\xb0\xb3\x04d@\x90@\x02\x05\xf5\xe1\0\x01\xff\x01@\x02\x05\xf5\xe1\0\x01\xff\x02@\x02\x05\xf5\xe1\0\x01\xff\x03\x90\xd04caml_gr_create_imageBA\x05\x03\xd7@\x05\x04\x1d@\xa0\xa0\xb0\x01\x04\x83*blit_image@\xc0\xb0\xc1\x05\x04\x1a\xb0\xb3\x04q@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xf8\xb0\xc1\x05\x04\x1f\xb0\xb3\x05\x04\x01@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xf9\xb0\xc1\x05\x04$\xb0\xb3\x05\x04\x06@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xfa\xb0\xb3\x05\x04&@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xfb@\x02\x05\xf5\xe1\0\x01\xfe\xfc@\x02\x05\xf5\xe1\0\x01\xfe\xfd@\x02\x05\xf5\xe1\0\x01\xfe\xfe\x90\xd02caml_gr_blit_imageCA\x05\x03\xf1@\x05\x047@\xa0\xb1\xb0\x01\x04\x84&status@\b\0\0$\0@@\xa0\xa0\xd0\xb0\x01\x04+'mouse_x@@\xb0\xb3\x05\x04\x19@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xf7\x05\x04D@\xa0\xd0\xb0\x01\x04,'mouse_y@@\xb0\xb3\x05\x04 @\x90@\x02\x05\xf5\xe1\0\x01\xfe\xf6\x05\x04K@\xa0\xd0\xb0\x01\x04-&button@@\xb0\xb3\x90\xb0E$bool@@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xf5\x05\x04U@\xa0\xd0\xb0\x01\x04.*keypressed@@\xb0\xb3\x04\n@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xf4\x05\x04\\@\xa0\xd0\xb0\x01\x04/#key@@\xb0\xb3\x05\x01\xac@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xf3\x05\x04c@@@A@@@\x05\x04c@A\xa0\xb1\xb0\x01\x04\x85%event@\b\0\0$\0@@\x91\xa0\xd0\xb0\x01\x041+Button_down@@@\x05\x04m@\xa0\xd0\xb0\x01\x042)Button_up@@@\x05\x04q@\xa0\xd0\xb0\x01\x043+Key_pressed@@@\x05\x04u@\xa0\xd0\xb0\x01\x044,Mouse_motion@@@\x05\x04y@\xa0\xd0\xb0\x01\x045$Poll@@@\x05\x04}@@A@@@\x05\x04}@A\xa0\xa0\xb0\x01\x04\x86/wait_next_event@\xc0\xb0\xc1\x05\x04z\xb0\xb3\x90\xb0I$list@\xa0\xb0\xb3\x90\x04(@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xef@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xf0\xb0\xb3\x90\x04Y@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xf1@\x02\x05\xf5\xe1\0\x01\xfe\xf2\x90\xd02caml_gr_wait_eventAA\x05\x04P@\x05\x04\x96@\xa0\xa0\xb0\x01\x04\x87,loop_at_exit@\xc0\xb0\xc1\x05\x04\x93\xb0\xb3\x04\x19\xa0\xb0\xb3\x04\x16@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xe7@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xe8\xb0\xc1\x05\x04\x9c\xb0\xc1\x05\x04\x9e\xb0\xb3\x04\x19@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xe9\xb0\xb3\x05\x04\xa0@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xea@\x02\x05\xf5\xe1\0\x01\xfe\xeb\xb0\xb3\x05\x04\xa3@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xec@\x02\x05\xf5\xe1\0\x01\xfe\xed@\x02\x05\xf5\xe1\0\x01\xfe\xee@\x05\x04\xb1@\xa0\xa0\xb0\x01\x04\x88+key_pressed@\xc0\xb0\xc1\x05\x04\xae\xb0\xb3\x05\x04\xad@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xe4\xb0\xb3\x04l@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xe5@\x02\x05\xf5\xe1\0\x01\xfe\xe6@\x05\x04\xbe@\xa0\xa0\xb0\x01\x04\x89%sound@\xc0\xb0\xc1\x05\x04\xbb\xb0\xb3\x05\x04\x9d@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xdf\xb0\xc1\x05\x04\xc0\xb0\xb3\x05\x04\xa2@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xe0\xb0\xb3\x05\x04\xc2@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xe1@\x02\x05\xf5\xe1\0\x01\xfe\xe2@\x02\x05\xf5\xe1\0\x01\xfe\xe3\x90\xd0-caml_gr_soundBA\x05\x04\x8d@\x05\x04\xd3@\xa0\xa0\xb0\x01\x04\x8a0auto_synchronize@\xc0\xb0\xc1\x05\x04\xd0\xb0\xb3\x04\x8b@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xdc\xb0\xb3\x05\x04\xd2@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xdd@\x02\x05\xf5\xe1\0\x01\xfe\xde@\x05\x04\xe0@\xa0\xa0\xb0\x01\x04\x8b+synchronize@\xc0\xb0\xc1\x05\x04\xdd\xb0\xb3\x05\x04\xdc@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xd9\xb0\xb3\x05\x04\xdf@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xda@\x02\x05\xf5\xe1\0\x01\xfe\xdb\x90\xd03caml_gr_synchronizeAA\x05\x04\xaa@\x05\x04\xf0@\xa0\xa0\xb0\x01\x04\x8c,display_mode@\xc0\xb0\xc1\x05\x04\xed\xb0\xb3\x04\xa8@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xd6\xb0\xb3\x05\x04\xef@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xd7@\x02\x05\xf5\xe1\0\x01\xfe\xd8\x90\xd04caml_gr_display_modeAA\x05\x04\xba@\x05\x05\0@\xa0\xa0\xb0\x01\x04\x8d-remember_mode@\xc0\xb0\xc1\x05\x04\xfd\xb0\xb3\x04\xb8@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xd3\xb0\xb3\x05\x04\xff@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xd4@\x02\x05\xf5\xe1\0\x01\xfe\xd5\x90\xd05caml_gr_remember_modeAA\x05\x04\xca@\x05\x05\x10@\xa0\xb1\xb0\x01\x04\x8e'context@\b\0\0$\0@@@A@@@\x05\x05\x15@A\xa0\xa0\xb0\x01\x04\x8f*open_graph@\xc0\xb0\xc1 \xb0\xb3\x90\xb0C&string@@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xd0\xb0\xb3\x90\xb0F$unit@@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xd1@\x02\x05\xf5\xe1\0\x01\xfe\xd2@\x05\x05)@\xa0\xa0\xb0\x01\x04\x90+open_canvas@\xc0\xb0\xc1\x04\x14\xb0\xb3\xb1\x90\xb0@\"JsA!t\0\xff\xa0\xb0\xb3\xb1\x90\xb0@(Dom_htmlA-canvasElement\0\xff@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xcc@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xcd\xb0\xb3\x04\x1e@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xce@\x02\x05\xf5\xe1\0\x01\xfe\xcf@\x05\x05D@\xa0\xa0\xb0\x01\x04\x91+get_context@\xc0\xb0\xc1\x04/\xb0\xb3\x04(@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xc9\xb0\xb3\x90\x04?@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xca@\x02\x05\xf5\xe1\0\x01\xfe\xcb@\x05\x05R@\xa0\xa0\xb0\x01\x04\x92+set_context@\xc0\xb0\xc1\x04=\xb0\xb3\x04\x0b@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xc6\xb0\xb3\x049@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xc7@\x02\x05\xf5\xe1\0\x01\xfe\xc8@\x05\x05_@\xa0\xa0\xb0\x01\x04\x93$loop@\xc0\xb0\xc1\x04J\xb0\xb3\x90\xb0I$list@\xa0\xb0\xb3\x04\xe2@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xbe@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xbf\xb0\xc1\x04V\xb0\xc1\x04X\xb0\xb3\x04\xe5@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xc0\xb0\xb3\x04T@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xc1@\x02\x05\xf5\xe1\0\x01\xfe\xc2\xb0\xb3\x04W@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xc3@\x02\x05\xf5\xe1\0\x01\xfe\xc4@\x02\x05\xf5\xe1\0\x01\xfe\xc5@\x05\x05}@\xa0\xa0\xb0\x01\x04\x94)mouse_pos@\xc0\xb0\xc1\x04h\xb0\xb3\x04a@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xb8\xb0\xb3\xb1\x90\xb0@#LwtA!t\0\xff\xa0\xb0\x92\xa0\xb0\xb3\x90\xb0A#int@@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xba\xa0\xb0\xb3\x04\x07@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xb9@\x02\x05\xf5\xe1\0\x01\xfe\xbb@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xbc@\x02\x05\xf5\xe1\0\x01\xfe\xbd@\x05\x05\x9d@\xa0\xa0\xb0\x01\x04\x95+button_down@\xc0\xb0\xc1\x04\x88\xb0\xb3\x04\x81@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xb4\xb0\xb3\xb1\x90\xb0@#LwtA!t\0\xff\xa0\xb0\xb3\x90\xb0E$bool@@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xb5@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xb6@\x02\x05\xf5\xe1\0\x01\xfe\xb7@\x05\x05\xb6@\xa0\xa0\xb0\x01\x04\x96(read_key@\xc0\xb0\xc1\x04\xa1\xb0\xb3\x04\x9a@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xb0\xb0\xb3\xb1\x90\xb0@#LwtA!t\0\xff\xa0\xb0\xb3\x90\xb0B$char@@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xb1@\x90@\x02\x05\xf5\xe1\0\x01\xfe\xb2@\x02\x05\xf5\xe1\0\x01\xfe\xb3@\x05\x05\xcf@@\x84\x95\xa6\xbe\0\0\x01\x9a\0\0\0F\0\0\0\xf8\0\0\0\xce\xa0\xa0+Graphics_js\x900I\xa5\x8fX{\x7f\xffD\x1a@\x11?\xf7\x9ce\x92\xa0\xa0$Unix\x9000\xa4\xcc\x8e_O\x90.\xa6\t\xc9\x1c\xae\xc4\x8a\xf7\xa0\xa0+Typed_array\x900\x85\x89\x8f\xd2\xc5\xf1\xf6V\xaf\xd0%\x9a\x80\xa5\xbd\xec\xa0\xa0*Pervasives\x900\r\x01ZZ!6e\x9b\r\xe41\xbe\x7f\x15E\xbe\xa0\xa0,Lwt_sequence\x900\xbe\xe3H\xc4\x15\x16\x8e\x88\xca\xd7\xbfr\xbbkuP\xa0\xa0#Lwt\x900Y\xf7\xff[c\xdet\x013V!\xd6g\xda\xe3\x12\xa0\xa0\"Js\x900vq\xc0\xe8\xf8\x98\xc6/\xd0\xbe\xc0$\bZ\x99\xe7\xa0\xa0(Graphics\x900\xd4\xceB\x1e\x96\x02\xd7\xf1Pp\xca0\x9b3m\xb8\xa0\xa0$File\x900j\xb43\xac\xa1\xe3\xd2\x80\x9d#\xa8\x96Lj\xb8$\xa0\xa0(Dom_html\x900\xeb\xab\xd2\x81o\xb8\xc2\xd4\xf1\xcf\x81\xbdX\xb3l%\xa0\xa0#Dom\x900\xb9*\x87Q\xcf\xa2\xd0a\xbcC0&c\x01?\xf3\xa0\xa0'Complex\x900\xd0\xdc\xc1\xda<iL\xf9\xa7\xe9$\xc7\x83-\x15(\xa0\xa08CamlinternalFormatBasics\x900\x8b\x06\x9f\xca\x1eM\x93\x16\xb5\x88\xe5UO8\xbb$\xa0\xa0(Bigarray\x900\x06C\x18z\x8bV(X\x11\x86\x90\xc3\x93\xd0\x1c.@\x84\x95\xa6\xbe\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0@");
    return}
  (function(){return this}()));
