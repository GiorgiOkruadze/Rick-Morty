import { Directive, ElementRef, OnInit, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appFont]'
})
export class FontDirective implements OnInit{
  @Input('appFont') defaultColor:string = 'black';
  @Input() setColor:string = 'black';
  constructor(private elemRef:ElementRef, private renderer:Renderer2) { }


  ngOnInit(): void {
    // (this.elemRef.nativeElement as HTMLElement).style.color = "red";
    this.renderer.setStyle(this.elemRef.nativeElement,"color",this.defaultColor);
  }

  @HostListener('mouseenter') onmouseenter(event:Event)
  {
    this.renderer.setStyle(this.elemRef.nativeElement,"color",this.setColor);
  }
  
  @HostListener('mouseleave') onmouseleave(event:Event)
  {
    this.renderer.setStyle(this.elemRef.nativeElement,"color",this.defaultColor);
  }

}
