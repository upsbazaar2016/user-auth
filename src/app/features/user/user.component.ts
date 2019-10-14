import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  blogs: string[];
  wordLimit: number;
  constructor() { }

  ngOnInit() {
    this.wordLimit = 100;
    this.generateBlogs();
  }


  generateBlogs() {
    this.blogs = [
    `
    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    Why do we use it?
    
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    
    Where does it come from?
    
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    
    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
    Where can I get some?
    
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
    `,
    `
    

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus velit, lacinia a felis vitae, lobortis bibendum ex. Morbi rutrum varius rhoncus. Sed at consequat tellus. Morbi aliquet leo eu purus egestas, at mattis felis egestas. Ut condimentum dui venenatis lacus interdum placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus velit neque, ullamcorper eget ultricies eu, placerat posuere mi. Nam mollis arcu non metus condimentum, sed placerat ipsum luctus. Duis a lobortis augue. Nullam ut magna sed eros cursus euismod. Phasellus quis fringilla sapien, ut elementum nulla. Sed congue lorem vel mauris placerat, eget laoreet ipsum elementum.

Aliquam ullamcorper mi vestibulum augue malesuada, finibus fermentum metus ornare. Aenean vitae scelerisque mi, eget euismod lorem. Curabitur congue nibh ac mauris vehicula, vitae luctus ex consectetur. Aenean vitae libero pulvinar, facilisis eros in, aliquet mauris. Ut consectetur gravida ligula, et suscipit ex luctus vel. Praesent et arcu eu lorem lobortis tincidunt ut non leo. Mauris quis est elit. Praesent commodo rhoncus pharetra. Sed tristique venenatis massa sagittis euismod. Sed ac lorem id sapien porta efficitur. Maecenas imperdiet lectus vitae arcu interdum placerat. Donec dictum, elit ac viverra aliquam, ligula dui consequat nisi, eget sodales ante velit luctus eros. In eget consectetur nibh, eget facilisis sem. Morbi malesuada quam at vestibulum imperdiet. Donec accumsan sodales bibendum. Vestibulum vestibulum, eros id maximus pulvinar, dolor neque suscipit justo, in finibus augue turpis a diam. 
    `,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat quam a dolor rutrum luctus. Suspendisse potenti. Sed sed viverra metus, vitae mattis ex. Aenean fringilla id lacus eu interdum. Sed lacinia metus ut erat vulputate, eget vulputate velit molestie. Mauris lectus ipsum, volutpat et faucibus sit amet, sodales a mi. Proin nisl lacus, aliquam et turpis eget, lobortis ultricies mi. Vestibulum blandit lacus id diam aliquam, at euismod lectus pretium. Phasellus id maximus risus, a gravida turpis. Sed ut condimentum urna.
    
    Proin vitae magna malesuada, lacinia dolor nec, volutpat dolor. Nam at purus sapien. Donec vitae neque varius, sagittis sapien ut, ultrices libero. Vestibulum faucibus diam et sem luctus faucibus. Fusce id odio vel erat hendrerit egestas. Curabitur porta, erat nec blandit fermentum, est eros convallis enim, vitae blandit augue nunc ac odio. Praesent cursus metus non nisi pellentesque vehicula. Nullam rutrum mi neque.
    
    In id viverra metus. Curabitur augue ex, pretium ac mattis sed, vulputate non mauris. Morbi scelerisque et orci non fringilla. Mauris ac neque nec ex posuere blandit non ac nisi. Morbi id mi interdum, molestie est non, tempor orci. In ornare pulvinar est, eget pulvinar ipsum vehicula non. Fusce id mauris commodo, ultricies turpis a, tincidunt est. Morbi sagittis enim sit amet dolor laoreet, sit amet egestas erat finibus. Ut venenatis mi nisl, vel pharetra ipsum eleifend ut. Etiam in erat ultrices, aliquam libero at, molestie metus. Etiam eget nunc hendrerit, euismod magna vitae, commodo risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam egestas dui ut bibendum. Curabitur a risus ut nisi posuere interdum sed vitae nibh.
    
    Nam nisl tortor, varius at malesuada dapibus, pulvinar sit amet nisl. Mauris eleifend elit ut nunc interdum malesuada. In rutrum varius risus sit amet posuere. Proin mattis, libero id efficitur ullamcorper, nisl orci finibus lorem, eu dignissim leo neque et tortor. Vivamus efficitur posuere laoreet. Phasellus pharetra eleifend velit. Integer viverra libero quis pharetra tristique. Sed ac dapibus eros. Vivamus vitae laoreet turpis. Nullam commodo eleifend ante, quis accumsan mauris efficitur eget.
    
    Fusce ut auctor erat. Duis bibendum, ligula ac pellentesque commodo, augue nisi malesuada ligula, ac accumsan turpis ligula a purus. Nam consequat fermentum lacinia. Integer auctor lacinia nisi congue tincidunt. Cras hendrerit mi lectus, malesuada maximus dui ullamcorper eu. Etiam tristique placerat arcu sit amet ultricies. Nunc viverra fringilla urna in elementum. Pellentesque dictum laoreet ex ut accumsan.
    
    Maecenas quis purus sit amet quam dignissim mollis. Nulla fermentum ligula eget massa venenatis porta. Sed sit amet libero accumsan, congue erat et, viverra nulla. Nam ac ex eget neque sodales mattis ut fermentum metus. Nam eu vulputate nisi, ut auctor odio. Nam ut fermentum sapien, a convallis nunc. Etiam a ligula massa. Maecenas faucibus convallis neque, at imperdiet nibh pretium eget. Morbi sed nibh erat. Vivamus eget mattis justo. Duis dignissim dolor a lacinia rhoncus. Nulla finibus lacinia facilisis. Mauris iaculis nec quam eleifend sodales. Duis nec massa arcu. Maecenas tristique, arcu ut porttitor euismod, odio augue pretium justo, ut mollis augue metus lobortis libero.
    
    Maecenas tristique velit fringilla porta aliquam. Cras auctor, libero et feugiat ornare, enim purus pellentesque augue, non sagittis lorem urna id eros. Aenean vehicula dui diam, in aliquam ligula ullamcorper a. Mauris a urna non dolor lobortis dictum. Integer tristique eget mauris id interdum. Morbi eu tellus non nulla efficitur elementum. Donec convallis, leo ut vulputate bibendum, ex lectus scelerisque felis, sed dignissim felis purus nec lacus. Sed non libero tempor, cursus augue nec, volutpat tortor. Pellentesque enim lectus, auctor nec porttitor sed, volutpat in metus. Ut cursus nisl ac est imperdiet ultrices. Donec eleifend tempor nulla. Nunc est justo, fermentum nec ligula in, blandit pellentesque sem. Praesent vulputate congue mauris, id viverra massa consectetur vitae. Proin nunc dolor, egestas at libero ac, rhoncus vestibulum nulla. Nunc egestas at velit id malesuada. Ut a pharetra ex.
    
    Nullam tristique luctus maximus. Integer mollis augue fermentum gravida dictum. Sed feugiat nisl a lacus efficitur cursus. Suspendisse euismod ac nunc a dapibus. Vivamus ut est magna. Suspendisse id urna id augue consequat cursus mattis a leo. Nunc odio eros, venenatis vitae nulla ut, dignissim ornare arcu.
    
    Proin quis quam est. Sed nec suscipit tortor, id lacinia libero. Etiam justo augue, dictum id orci dapibus, semper cursus eros. Cras ac leo sed lacus vehicula vehicula elementum quis quam. In vulputate justo dapibus urna euismod porttitor. Mauris ac orci diam. Phasellus non nisl orci. Integer lacus dui, lacinia ut dui in, dictum laoreet odio. Nam mi tellus, varius non nunc et, condimentum rutrum lorem. Curabitur imperdiet euismod malesuada. Donec mi ex, accumsan vel accumsan quis, consectetur at justo. Suspendisse ornare mauris eget ligula pharetra posuere. Vestibulum nunc lectus, dictum ac consectetur at, ornare non elit. Sed tristique tempus bibendum. Ut vel ullamcorper arcu.
    
    Praesent dictum nibh quam, ut varius justo gravida sed. Fusce sagittis turpis a sem rhoncus ornare. Proin rutrum sem a libero congue sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec non ligula fermentum, placerat dui eget, feugiat metus. Ut at blandit dolor. Quisque tristique orci nec dolor efficitur, et sollicitudin dolor dapibus. Sed dapibus, libero eget efficitur bibendum, sem dolor euismod ante, a pretium massa leo vitae turpis. Curabitur rutrum magna quis tellus hendrerit, vitae ullamcorper leo posuere. Integer vulputate nisl ut nulla rutrum egestas. Curabitur ultrices est sit amet ante rhoncus ultrices nec id metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec in justo metus. Praesent feugiat pulvinar dui ornare molestie. In interdum lacus vitae ex ornare, nec mattis neque fringilla. `,
  `
  

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium neque non lobortis tempor. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat enim id fringilla gravida. Pellentesque sagittis, mi vitae pharetra efficitur, odio ex ultrices neque, non aliquam neque justo sit amet felis. Phasellus pulvinar vitae elit id posuere. Quisque dolor purus, maximus at orci a, congue vestibulum dui. Nulla dictum varius tellus vitae accumsan. Pellentesque sapien tortor, gravida non laoreet vel, sodales quis nunc. Suspendisse consequat tempor ante, id rutrum orci ultrices quis. Aenean posuere ex in urna eleifend, sit amet viverra augue auctor. Donec sagittis nisl ut purus blandit eleifend. Morbi aliquet ipsum nisi, id dictum dolor varius vel. Curabitur vel consequat diam, ac pretium libero.

Pellentesque eget orci velit. Aliquam sodales ornare dolor, non ultricies ante pretium eu. Fusce gravida nunc rhoncus, venenatis ligula quis, cursus augue. Vivamus orci massa, bibendum vitae ex vitae, sollicitudin elementum mi. Sed tincidunt nunc ut ante dignissim posuere. Aliquam quam lorem, malesuada nec metus ac, faucibus molestie augue. Fusce eu lectus a leo ornare feugiat vitae id enim. Proin vel lobortis augue. Suspendisse vel ipsum dolor. Suspendisse eu ante a sem sollicitudin molestie. Donec magna nunc, tincidunt in ipsum id, varius aliquet odio. Mauris at sodales lacus, quis commodo lectus. Nunc mauris lorem, lobortis sed blandit eget, bibendum eu dui. Nunc fringilla, nisl sit amet porta vulputate, nibh nibh fermentum ipsum, quis convallis urna enim at ex. Mauris volutpat sollicitudin nunc vel feugiat.

Ut faucibus justo quis dolor consectetur, sit amet lobortis urna posuere. Donec tempus vitae velit a molestie. In aliquet vitae nisl at ultricies. Vestibulum maximus quam odio, vel dictum tellus efficitur at. Maecenas finibus, lectus eget ultrices maximus, augue nulla placerat turpis, eget consectetur nibh lacus eu dolor. In luctus nunc et feugiat porta. Cras euismod eros pulvinar eros elementum rutrum. Fusce vitae varius neque, eget volutpat nisl. Sed consequat dui nec tortor placerat, at aliquam lectus sodales.

Nullam luctus, velit bibendum molestie egestas, lorem urna eleifend sem, ornare facilisis sapien est non justo. Morbi at neque nec nibh mattis suscipit. In maximus eros felis, ac maximus eros convallis eget. Vivamus tempor libero vel facilisis euismod. Suspendisse ullamcorper commodo tortor, ut dapibus elit facilisis vitae. Nulla malesuada erat nec blandit pulvinar. Suspendisse lacinia ipsum pulvinar eros sagittis placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id erat nulla. Quisque pellentesque quam vitae consequat hendrerit. Cras vitae euismod odio, sit amet feugiat quam. Cras id elit luctus, finibus turpis ut, faucibus ipsum. Pellentesque magna risus, malesuada eget nunc vitae, scelerisque tempor augue. 
  `
  ];


  }
}
