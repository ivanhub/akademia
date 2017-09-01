<?php

namespace frontend\models;

use Yii;

/**
 * This is the model class for table "forma2".
 *
 * @property int $ID
 * @property string $name
 * @property string $phone
 * @property string $body
 * @property string $date
 * @property string $Theory
 * @property string $Practice
 * @property string $Autodrome
 * @property string $Transmission
 * @property string $category
 */
class Forma2 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'forma2';
    }

  
  public function formName()
{
    return '';
}

  /**
     * @inheritdoc
     */
    
    public function rules()
    {
        return [
            [['name', 'phone', 'body', 'Theory', 'Practice', 'Autodrome', 'Transmission', 'category'], 'required'],
            [['body'], 'string'],
            [['date'], 'safe'],
            [['name'], 'string', 'max' => 90],
            [['phone'], 'string', 'max' => 20],
            [['theory', 'practice', 'autodrome', 'transmission', 'category'], 'string', 'max' => 30],
          [['phone'], 'match', 'pattern' => '/^(?:(?:\+?\d\s*(?:[.-]\s*)?)?(?:\(\s*([0-9][0-9][0-9])\s*\)|([0-9][0-9][0-9]))\s*(?:[.-]\s*)?)?([0-9][0-9][0-9]|[0-9][0-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|д\.?|доб\.?|добавочный)\s*(\d+))?$/','message' => 'Неверный формат номера телефона'],
           ['name', 'match', 'pattern' => '/^[a-z]|[а-я]|[A-Z]|[А-Я]\w*$/','message' => 'Имя заполнено неверно']    
   
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'ID' => 'ID',
            'name' => 'Name',
            'phone' => 'Phone',
            'body' => 'Body',
            'date' => 'Date',
            'Theory' => 'Theory',
            'Practice' => 'Practice',
            'Autodrome' => 'Autodrome',
            'Transmission' => 'Transmission',
            'category' => 'Category',
        ];
    }


           public function sendEmail()
    {
    if(Yii::$app->mailer->compose(  ['html' => 'html2', 'text' => 'text2'],['body' => $this->body, 'phone' => $this->phone, 'name'=>$this->name, 'theory'=>$this->theory, 'practice'=>$this->practice, 'autodrome'=>$this->autodrome, 'transmission'=>$this->transmission, 'category'=>$this->category, 'total' =>$this->total])
        ->setFrom(Yii::$app->params['supportEmail'])
        ->setTo(Yii::$app->params['orderEmail'])
        ->setSubject('Заявка с сайта Росавтоакадемия.РФ' )
        ->send())
    { return true; }
            else {
            return false;
        }
    }

        public function saveform()
{
    if ($this->validate()) {
        $form = new Forma2();
        $form->name = $this->name;
        $form->phone = $this->phone;
        $form->body = $this->body;
        $form->save();


return true;
} else {
return false;
}
}
}
