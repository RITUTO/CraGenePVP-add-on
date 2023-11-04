import { ScriptEventCommandMessageAfterEvent, system, world } from "@minecraft/server";
import { ModalFormData,ActionFormData,MessageFormData} from "@minecraft/server-ui";

    world.afterEvents.itemUse.subscribe(async (ev) => {
        const {source,item,itemStack} = ev;
        if (itemStack.typeId != "minecraft:book") return
        await from(source);
    });
    const 座標 = {"pvp":"7 -59 -20","ガチャ":"0 -59 -48","エンチャント":"34 -59 0","クラフト":"121.50 -60.00 3.50","SHOP":"-29.50 -56.00 1.50",
    "釣り場":"95.50 -59.00 -4.50","放置場":"76.89 -59.94 -45.56","アスレチック":"178.50 -59.00 -24.50"}
    async function from(source) {//フォームを開くための関数
    const from = new ActionFormData(); //フォームの名前
     from.title("テレポート")//フォームのタイトル
     from.body("tpしたいところを選んでください")//フォームの説明
     from.button("PVP","textures/items/diamond_sword.png") //メモ textures/items/diamond_sword.png
     from.button("ガチャ","textures/items/book.png") 
     from.button("エンチャントルーム","textures/blocks/enchanting_table_top")
     from.button("クラフト","textures/blocks/crafting_table_top")
     from.button("SHOP","textures/items/egg_villager")
     from.button("採掘場","textures/items/diamond_pickaxe")
     from.button("釣り場","textures/items/fishing_rod_uncast")
          const { canceled, selection , } = await from.show(source);
          if (canceled) return;
          if (selection == 0) {
            source.runCommand(`tp @s ${座標.pvp}`)} //pvpの座標にテレポート
          if (selection == 1) {
            source.runCommand(`tp @s ${座標.ガチャ}`)}  
          if (selection == 2){source.runCommand(`tp @s ${座標.エンチャント}`)}
          if (selection == 3){source.runCommand(`tp @s ${座標.クラフト}`)}
          if (selection == 4){source.runCommand(`tp @s ${座標.SHOP}`)}
          if (selection == 5){
            await si(source)
            async function si(source) {
              const s= new ActionFormData(); 
               s.title("採掘場選択")
               s.body("場所を選択してください")
               s.button("石炭","") 
               s.button("鉄","textures/items/iron_ingot") 
               s.button("ダイヤ","textures/items/diamond") 
               s.button("金","textures/items/gold_ingot") 
              const { canceled, selection} = await s.show(source);
                    if (canceled) return;
                    if (selection == 0) {source.runCommand(`tp @s -29.50 -56.00 1.50`)} 
                    if (selection == 1) {source.runCommand(`tp @s 73.50 -59.00 6.50`)} 
                    if (selection == 2) {source.runCommand(`tp @s 73.50 -59.00 6.50`)} 
                    if (selection == 3) {source.runCommand(`tp @s 95.50 -59.00 -4.50`)} 
            
                  
                  
                  }
          }
          if (selection == 6){source.runCommand(`tp @s ${座標.釣り場}`)}
          if (selection == 7){source.runCommand(`tp @s ${座標.放置場}`)}
          if (selection == 8){source.runCommand(`tp @s ${座標.アスレチック}`)}
    
    
    } 
    
    export {from}
