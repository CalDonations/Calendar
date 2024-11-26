import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function MaterialListPage() {
    const navigate = useNavigate(); // 使用 useNavigate 鉤子

    return (
        <div className="container mx-auto py-10">
            <button
                className="mb-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={() => navigate(-1)} // 返回上一頁
            >
                返回
            </button>
            <h1 className="text-3xl font-bold mb-6">物資清單</h1>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>目前缺乏與應避免捐贈的物資種類</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>建議</TableHead>
                                <TableHead>不建議</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <ul className="list-disc pl-5">
                                        <li>碗裝泡麵</li>
                                        <li>罐頭(魚類/肉醬類)</li>
                                        <li>罐裝甜品(如八寶粥及花生牛奶等)</li>
                                        <li>鋁箔包裝保久乳/豆乳</li>
                                        <li>零食餅乾</li>
                                        <li>沖泡式飲品、湯品、粥品</li>
                                        <li>瓶裝水</li>
                                    </ul>
                                </TableCell>
                                <TableCell>
                                    <ul className="list-disc pl-5">
                                        <li>已經過期或即期的食品</li>
                                        <li>不易保存的食品(如新鮮蔬果、肉類)</li>
                                    </ul>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>衣物大原則</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>至少八成新，有彈性、寬鬆、適合活動佳</p>
                    <p>不收有污漬/有霉點/二手鞋襪/二手內衣褲</p>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>建議</TableHead>
                                <TableHead>不建議</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <ul className="list-disc pl-5">
                                        <li>輕薄上衣、T-shirt、排汗衫</li>
                                        <li>運動褲、彈性牛仔褲</li>
                                        <li>輕薄外套、防曬外套</li>
                                        <li>襪子(只能全新！)</li>
                                        <li>免洗/全新內衣褲</li>
                                        <li>鴨舌帽、漁夫帽、毛帽</li>
                                        <li>塑膠拖鞋</li>
                                    </ul>
                                </TableCell>
                                <TableCell>
                                    <ul className="list-disc pl-5">
                                        <li>短版上衣、襯衫、過多墜飾的衣物</li>
                                        <li>緊身褲、西裝褲</li>
                                        <li>西裝外套、皮衣</li>
                                        <li>絲襪、船型襪、壓力襪、連身襪</li>
                                        <li>頭帶</li>
                                        <li>夾腳拖</li>
                                    </ul>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>清潔用品</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-5">
                        <li>全新毛巾</li>
                        <li>衛生紙/廚房紙巾</li>
                        <li>刮鬍刀</li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>其他</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-5">
                        <li>免洗筷</li>
                        <li>雨衣/雨傘</li>
                        <li>暖暖包</li>
                        <li>乾淨塑膠袋/紙袋/環保袋</li>
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>物資分配流程 / 注意事項</CardTitle>
                </CardHeader>
                <CardContent>
                    <ol className="list-decimal pl-5">
                        <li>若時間允許，可以先聯絡相關社福團體，如芒草心及人生百味，瞭解他們的作業流程後依照步驟完成捐物！</li>
                        <li>若因其他因素欲親自捐贈物資給無家者大哥大姐們，可以：
                            <ul className="list-disc pl-5 mt-2">
                                <li>參考平台記錄並盡量挑選假日時段(物資量較平日少)，且晚間較佳(大哥大姐們可能白天去工作了不在現場～)</li>
                                <li>抵達目的地後，可以觀察一下現場狀況，將物資優先分配給看起來手邊較缺乏資源的大哥大姐</li>
                                <li>若大哥大姐已經就寢，也可以直接將物資放在他們身邊～</li>
                                <li>若需要影像紀錄，務必事先徵求大哥大姐的同意，並視需求於剪輯/後製時將臉部打碼</li>
                            </ul>
                        </li>
                    </ol>
                </CardContent>
            </Card>
            {/* 服務團體資訊 */}
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>無家者服務團體 / 其他地點</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-5">
                        <li>
                            <li>臺北市政府社會局</li>
                            <ul className="pl-5">
                                <li>中正社福中心｜02-2396-2340｜臺北市中正區延平南路207號6樓</li>
                                <li>萬華社福中心｜02-2336-5700｜臺北市萬華區萬大路22號4樓</li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://www.homelesstaiwan.org/">芒草心｜02-2331-5992｜臺北市萬華區雅江街50號</a>
                        </li>
                        <li>
                            <a href="https://www.homelesstaiwan.org/post/20230508donation">別讓物資變誤資｜香香澡堂捐物懶人包</a>
                        </li>
                        <li>
                            <a href="https://doyouaflavor.tw/">人生百味｜02-2371-2771｜臺北市萬華區貴陽街二段202號2樓</a>
                        </li>
                        <li>
                            <a href="https://www.poverty.org.tw/links/all/1">思安｜02-2312-0225｜臺北市中正區中山北路一段26巷7號1樓</a>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}

